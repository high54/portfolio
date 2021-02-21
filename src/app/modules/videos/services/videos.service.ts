import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Playlist } from '../models/playlist.interface';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  constructor(
    private http: HttpClient
  ) { }

  public playlists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>('./assets/data/playlists.json')
      .pipe(catchError((error) => throwError(JSON.stringify(error))));
  }

}
