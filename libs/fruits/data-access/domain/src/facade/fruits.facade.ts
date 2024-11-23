// angular
import { Injectable } from "@angular/core";

// dependencies
import { BehaviorSubject, Observable, tap, map } from "rxjs";

// interfaces
import { FruitDomain } from "../entity/fruits.domain";

import { FruitsInfrastructure } from "../infrastructure/fruits.infrastructure";

import { Fruit} from "@fruits/util/model";

// eslint-disable-next-line @nx/enforce-module-boundaries
import { mapFruitsList, mapSingleFruit } from "@fruits/data-access/util";

@Injectable({
  providedIn: 'root',
})
export class FruitsFacade {
  private _fruits$: BehaviorSubject<Fruit[]> = new BehaviorSubject<Fruit[]>([]);
  fruits$ = this._fruits$.asObservable();

  private _fruit$: BehaviorSubject<Fruit | undefined> = new BehaviorSubject<Fruit | undefined>(undefined);
  fruit$ = this._fruit$.asObservable();

  constructor(private readonly infrastructure: FruitsInfrastructure) {}

  findAll(): Observable<FruitDomain[]> {
    return this.infrastructure.findAll().pipe(
      map((fruitsDomain: FruitDomain[]) => mapFruitsList(fruitsDomain)),
      tap((fruits: Fruit[]) => this._fruits$.next(fruits))
    );
  }

  getById(id: number): Observable<FruitDomain> {
    return this.infrastructure.getById(id).pipe(
      map((fruitDomain: FruitDomain) => mapSingleFruit(fruitDomain)),
      tap((fruit: Fruit) => this._fruit$.next(fruit))
    );
  }
}
