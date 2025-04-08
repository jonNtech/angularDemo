import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemonData(endpoint: string = ''): Observable<any> {
    return this.http.get(`${this.baseUrl}${endpoint}`);
  }

  getPokemonByIdOrName(idOrName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}pokemon/${idOrName}`);
  }

  getPokemonTypeByIdOrName(idOrName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}type/${idOrName}`);
  }

  getPokemonItemByIdOrName(idOrName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}item/${idOrName}`);
  }

  getPokemonAbilityByIdOrName(idOrName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}ability/${idOrName}`);
  }
}
