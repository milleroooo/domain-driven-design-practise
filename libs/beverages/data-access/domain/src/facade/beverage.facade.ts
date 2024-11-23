/**ANGULAR**/
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';

/**DEPENDENCIES**/
import { BehaviorSubject, tap } from 'rxjs';

/**INTERNALS**/
import { BeveragesInfrastructure } from '../infrastructure/beverage.infrastructure';
import { mapBeverageDomainToModel } from '../util/functions/beverages.mapper';
import { BeverageDomain } from '../entity/beverage.domain';
import { Beverage } from '../util/functions/beverages.mapper';

@Injectable({ providedIn: 'root' })
export class BeverageFacade {
  private readonly _beverages$ = new BehaviorSubject<Beverage[]>([]);
  public readonly beverages$ = this._beverages$
    .asObservable()
    .pipe(filter((beverages) => !!beverages));

  constructor(private readonly service: BeveragesInfrastructure) {}

  findAll(): void {
    this.service
      .findAll()
      .pipe(
        tap((beveragesDomain: BeverageDomain[]) => {
          const beverages: Beverage[] = beveragesDomain.map(
            (beverageDomain: BeverageDomain): Beverage =>
              mapBeverageDomainToModel(beverageDomain)
          );

          this._beverages$.next(beverages);
        })
      )
      .subscribe();
  }
}
