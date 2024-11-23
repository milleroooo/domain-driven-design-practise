// angular
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';

// dependencies
import {BehaviorSubject, tap} from 'rxjs';
import {SpicesInfrastructure} from "../infrastructure/spices.infrastructure";
import {SpiceDomain} from "../entity/spice.domain";
// eslint-disable-next-line @nx/enforce-module-boundaries
import {SpicesMapper} from "@spices/util/model";
// eslint-disable-next-line @nx/enforce-module-boundaries
import {Spice} from "@spices/util/model";


@Injectable({ providedIn: 'root' })
export class SpicesFacade {
  private _spices$ = new BehaviorSubject<Spice[]>([]);
  public spices$ = this._spices$.asObservable().pipe(filter((arr) => !!arr));

  private _spice$ = new BehaviorSubject<Spice | undefined>(undefined);
  public spice$ = this._spice$.asObservable().pipe(filter((arr) => !!arr));

  constructor(private service: SpicesInfrastructure, private mapper: SpicesMapper) {}

  findAll(): void {
    this.service.findAll().pipe(tap((spicesDomain: SpiceDomain[]) => {
      const spices: Spice[] = spicesDomain.map((spiceDomain: SpiceDomain): Spice => this.mapper.mapSpiceDomainToModel(spiceDomain));
      this._spices$.next(spices)
    })).subscribe();
  }

  findById(id: string): void {
    this.service.findById(id).pipe(tap((spiceDomain: SpiceDomain) => {
      this._spice$.next(this.mapper.mapSpiceDomainToModel(spiceDomain))
    })).subscribe();
  }
}
