// angular 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// dependencies
import { Observable } from 'rxjs';

// interfaces
import { VegetableDomain } from '../entity/vegetable.domain';


@Injectable({
  providedIn: 'root'
})
export class VegetableInfrastructure {

  private readonly backendUrl: string = 'http://localhost:3000';

  constructor(private readonly http: HttpClient){}

  findAll(): Observable<VegetableDomain[]> {
      return this.http.get<VegetableDomain[]>(`${this.backendUrl}/api/vegetables`)
  }

  getById(id: number): Observable<VegetableDomain> {
    return this.http.get<VegetableDomain>(`${this.backendUrl}/api/vegetables/${id}`)
  }

}