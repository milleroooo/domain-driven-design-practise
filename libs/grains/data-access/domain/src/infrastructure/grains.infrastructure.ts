import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrainsDomain } from '../interfaces/grains.interface';


@Injectable({
  providedIn: 'root'
})
export class GrainsInfrastructure {
  constructor(private readonly http: HttpClient){}

  findAll(): Observable<GrainsDomain[]> {
      return this.http.get<GrainsDomain[]>('/api/grains')
  }

}
