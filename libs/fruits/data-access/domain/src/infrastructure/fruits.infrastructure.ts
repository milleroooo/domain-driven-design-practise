// angular
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// dependencies
import { Observable } from "rxjs";

// interfaces
import { FruitDomain } from "../entity/fruits.domain";

@Injectable({
  providedIn: 'root',
})
export class FruitsInfrastructure {

  private readonly backendUrl: string = 'http://localhost:3000/';

  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<FruitDomain[]> {
    return this.http.get<FruitDomain[]>(`${this.backendUrl}api/fruits`);
  }

  getById(id: number): Observable<FruitDomain> {
    return this.http.get<FruitDomain>(`${this.backendUrl}api/fruits/${id}`);
  }
}
