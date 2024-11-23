// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// dependencies
import { Observable } from 'rxjs';
import {SpiceDomain} from "../entity/spice.domain";

const SPICES_URL = 'http://localhost:3000/api/spices/';

@Injectable({ providedIn: 'root' })
export class SpicesInfrastructure {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<SpiceDomain[]> {
    return this.httpClient.get<SpiceDomain[]>(SPICES_URL);
  }

  findById(id: string): Observable<SpiceDomain> {
    return this.httpClient.get<SpiceDomain>(`${SPICES_URL}${id}/`);
  }
}
