/**ANGULAR*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**DEPENDENCIES*/
import { Observable } from 'rxjs';

/**INTERNALS*/
import { DairyDomain } from '../entity/dairy.entity';

const URL = '/api/dairies/';

@Injectable({
  providedIn: 'root'
})
export class DairyInfrastructureService {
  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<DairyDomain[]> {
    return this.http.get<DairyDomain[]>(URL)
  }
}
