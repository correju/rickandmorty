import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private url : string = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}
  get (page: number = 0) {
    const url = `${this.url}${page  > 1 ? '' : `?page=${page}`}`;
    return this.http.get(url);
  }
}
