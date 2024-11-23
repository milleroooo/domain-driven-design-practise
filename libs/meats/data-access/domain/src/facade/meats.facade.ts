import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { MeatsDomain } from '../entity/meats.domain';
import { MeatsInfrastructure } from '../infrastructure/meats.infrastructure';
import { Meat } from '@meats/util/model';


@Injectable({
  providedIn: 'root'
})
export class MeatsFacade {

  private _meats$ = new BehaviorSubject<Meat[]>([])
  public meats$ = this._meats$.asObservable()

  constructor(private readonly infrastructure: MeatsInfrastructure){}

  findAll(): Observable<Meat[]> {
      return this.infrastructure.findAll().pipe(
        map((meatsDomain: MeatsDomain[]) =>
          this.mapMeat(meatsDomain)
        ),
        tap((meats: Meat[]) => {
          this._meats$.next(meats)
        })
      )
  }

  mapMeat(meats: MeatsDomain[]): Meat[]{
    return meats.map((meatDomain: MeatsDomain) => ({
            id: meatDomain.id,
            type: meatDomain.type,
            cut: meatDomain.cut,
            origin: meatDomain.origin
    }))
  }

}
