/**ANGULAR**/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**DEPENDENCIES**/
import { Observable } from 'rxjs';

/**INTERNALS**/
import { BeverageDomain } from '../entity/beverage.domain';

const BEVERAGES_URL = 'http://localhost:3000/api/beverages/';

@Injectable({ providedIn: 'root' })
export class BeveragesInfrastructure {
  constructor(private readonly httpClient: HttpClient) {}

  findAll(): Observable<BeverageDomain[]> {
    return this.httpClient.get<BeverageDomain[]>(BEVERAGES_URL);
  }
}
