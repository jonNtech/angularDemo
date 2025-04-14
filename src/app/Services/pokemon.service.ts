// pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonData(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemonById(id: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
