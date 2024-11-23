/**ANGULAR*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**DEPENDENCIES*/
import { rxActions } from '@rx-angular/state/actions';
import { rxState } from '@rx-angular/state';
import { tap } from 'rxjs/operators';

/**INTERNALS*/
import { DairyDomain } from '../entity/dairy.entity';
import { DairyInfrastructureService } from '../infrastructure/dairy.infrastructure';
import { DairyState } from '../store/dairy.state';
import { mapDomains } from '../util/mappers.util';

/**DAIRIES*/
import { Dairy } from '@dairies/util/model';

@Injectable(
  {providedIn: 'root'}
)
export class DairyFacadeService {
  private state = rxState<DairyState>(({ set, connect }) => {
    set({ dairies: [] });
  });

  public readonly actions = rxActions<{ findAll: void }>();
  public readonly dairies$: Observable<Dairy[]> = this.state.select('dairies');

  constructor(public readonly infrastructure: DairyInfrastructureService) {}

  private findAllEffect = this.actions.onFindAll(
    (credentials$) =>
      credentials$.pipe(
        tap(() => this.findAll()),
      ),
    (v) => console.log('side effect triggered', v),
  );

  private findAll(): void {
    this.infrastructure.findAll().pipe(
      tap((dairies: DairyDomain[]) => {
        this.state.set({ dairies: mapDomains(dairies) })
      }),
    ).subscribe()
  }
}
