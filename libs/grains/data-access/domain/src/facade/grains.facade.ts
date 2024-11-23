import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { GrainsInfrastructure } from '../infrastructure/grains.infrastructure';
import { Grain } from '../entity/grains.interface';

@Injectable({
  providedIn: 'root',
})
export class GrainsFacade {
  private _grains$ = new BehaviorSubject<Grain[]>([]);
  public grains$ = this._grains$.asObservable();

  constructor(private infrastructure: GrainsInfrastructure) {
  }

  findAll(){
      return this.infrastructure.findAll().pipe(
        tap((grainsList: Grain[]) => {
          console.log("GrainsFacade grains", grainsList)
          this._grains$.next(grainsList)
        })
      ).subscribe()
  }
}
