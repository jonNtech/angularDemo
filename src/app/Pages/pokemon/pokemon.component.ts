import { Component, OnInit, signal } from '@angular/core';
import PokemonService from '../../Services/pokemon.service';
import { pokemon } from '../../Models/pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: 'pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  apiData: any;
  error: string | null = null;
  isLoading: boolean = false;
  // pokemonData: Observable<pokemon[]>;
  pokemonData = signal<pokemon[]>([]);
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.fetchPokemonData();
  }

  fetchPokemonData() {
    this.pokemonService.getPokemonData().subscribe({
      next: (response) => {
        this.apiData = response;
        this.error = null;
        console.log('API Response:', response);
      },
      error: (error) => {
        this.error = 'Failed to fetch Pokemon data';
        console.error('Error fetching data:', error);
      },
    });
  }
  ngOnDestroy() {
    this.pokemonService.getPokemonData().subscribe({
      next: (response) => {
        this.apiData = response;
      },
    });
  }
}
