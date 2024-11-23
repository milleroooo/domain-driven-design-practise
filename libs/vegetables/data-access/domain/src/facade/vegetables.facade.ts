// angular
import { Injectable } from '@angular/core';

// dependencies
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

//interfaces
// eslint-disable-next-line @nx/enforce-module-boundaries
import { VegetableDomain } from '../entity/vegetable.domain';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Vegetable } from '@vegetables/util/model';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { VegetableInfrastructure } from '../infrastructure/vegetable.infrastructure';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { mapToVegetablesList, mapToVegetable } from "@vegetables/util/model";

@Injectable({
  providedIn: 'root'
})
export class VegetablesFacade {

  private _vegetables$ = new BehaviorSubject<Vegetable[]>([])
  public vegetables$ = this._vegetables$.asObservable()

  private _vegetable$: BehaviorSubject<Vegetable | undefined> = new BehaviorSubject<Vegetable | undefined>(undefined);
  public vegetable$ = this._vegetable$.asObservable();

  constructor(private readonly infrastructure: VegetableInfrastructure){}

  findAll(): Observable<Vegetable[]> {
      return this.infrastructure.findAll().pipe(
        map((vegetablesDomain: VegetableDomain[]) => mapToVegetablesList(vegetablesDomain)),
        tap((vegetables: Vegetable[]) => {
          this._vegetables$.next(vegetables)
        })
      )
  }

  getById(id: number): Observable<VegetableDomain> {
    return this.infrastructure.getById(id).pipe(
      map((vegetableDomain: VegetableDomain) => mapToVegetable(vegetableDomain)),
      tap((vegetable: Vegetable) => this._vegetable$.next(vegetable))
    )
  }

}