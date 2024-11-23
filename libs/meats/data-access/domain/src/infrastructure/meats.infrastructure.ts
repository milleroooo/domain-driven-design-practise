import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeatsDomain } from '../entity/meats.domain';


@Injectable({
  providedIn: 'root'
})
export class MeatsInfrastructure {
  constructor(private readonly http: HttpClient){}

  findAll(): Observable<MeatsDomain[]> {
      return this.http.get<MeatsDomain[]>('/api/meats')
  }

}
