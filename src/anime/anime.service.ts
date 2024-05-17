import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private apiUrl = 'https://gist.githubusercontent.com/VivianGomez/cc4116c67063bed35e9a39723e7a9d6a/raw/24ec60d9e5198a2fa76ad51c7ed577cfacf29f7f/anime.json';

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Anime[]>{
    return this.http.get<Anime[]>(this.apiUrl);
  }
}
