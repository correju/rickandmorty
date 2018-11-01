import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Characters } from '../../interfaces/characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private url : string = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}
  get (url: string = undefined) {
    return this.http.get<Characters>(url || this.url);
  }
  getSingle(id: number) {
    return this.http.get<any>(`${this.url}${id}`);
  }
}
