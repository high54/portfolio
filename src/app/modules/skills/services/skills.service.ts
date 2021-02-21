import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Rxjs
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// Models
import { Skill } from '../models/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor(
    private http: HttpClient
  ) { }

  public skills(): Observable<Skill[]> {
    return this.http.get<Skill[]>('./assets/data/skills.json')
      .pipe(catchError((error) => throwError(JSON.stringify(error))));
  }
}
