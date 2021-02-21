import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Rxjs
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// Interfaces
import { Degree } from '../models/degree.interface';

@Injectable({
  providedIn: 'root'
})
export class DegreesService {

  constructor(
    private http: HttpClient
  ) { }
  public degrees(): Observable<Degree[]> {
    return this.http.get<Degree[]>('./assets/data/degrees.json')
      .pipe(catchError((error: any) => throwError(JSON.stringify(error))));
  }
}
