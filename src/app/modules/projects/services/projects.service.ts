import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Rxjs
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// Models
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(
    private http: HttpClient
  ) { }

  public projects(): Observable<Project[]> {
    return this.http.get<Project[]>('./assets/data/projects.json')
      .pipe(catchError((error) => throwError(JSON.stringify(error))));
  }

}
