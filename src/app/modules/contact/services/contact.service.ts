import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }
  public sendEmail(payload): Observable<any> {
    return this.http.post('', JSON.stringify(payload))
    .pipe(catchError((error: any) => throwError(JSON.stringify(error))));
  }
}
