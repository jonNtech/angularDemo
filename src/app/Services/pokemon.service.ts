// pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pokemon } from '../Models/pokemon';

@Injectable({
  providedIn: 'root',
})
export default class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'; // or whatever your API endpoint is

  constructor(private http: HttpClient) {}

  getPokemonData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
