import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Rxjs
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// Models
import { Experience } from '../models/experience.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  constructor(
    private http: HttpClient
  ) { }
  public experiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>('./assets/data/experiences.json')
      .pipe(catchError((error) => throwError(JSON.stringify(error))));
  }

}
