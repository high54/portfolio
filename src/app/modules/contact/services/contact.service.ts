import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }
  public sendEmail(payload: Contact): Observable<any> {
    return this.http.post(environment.emailProvider, JSON.stringify(payload))
      .pipe(catchError((error: any) => throwError(JSON.stringify(error))));
  }
}
