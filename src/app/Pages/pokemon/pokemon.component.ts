import { Component, OnInit, signal, OnDestroy } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import PokemonService from '../../Services/pokemon.service';
import { pokemon } from '../../Models/pokemon';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, FormsModule],
  styleUrls: ['./pokemon.component.css'],
  providers: [PokemonService],
})
export class PokemonComponent implements OnInit {
  apiData: any;
  error: string | null = null;
  isLoading: boolean = true;
  pokemonData = signal<pokemon[]>([]);

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    //this.fetchPokemonData();
  }

  fetchPokemonData() {
    this.isLoading = true;
    this.pokemonService.getPokemonData().subscribe({
      next: (response) => {
        this.apiData = response;
        // Process the response to match your pokemon model
        this.pokemonData.set(response.results || []);
        this.error = null;
        this.isLoading = false;
        console.log('API Response:', response);
      },
      error: (error) => {
        this.error = 'Failed to fetch Pokemon data';
        this.isLoading = false;
        console.error('Error fetching data:', error);
      },
    });
  }

  pokemonId: number = 1;

  searchPokemonById(event: Event) {
    event.preventDefault();
    this.isLoading = true;
    this.pokemonService.getPokemonById(this.pokemonId).subscribe({
      next: (response) => {
        const pokemon = this.transformPokemonData(response);
        this.pokemonData.set([pokemon]); // Set as an array with one Pokemon
        this.error = null;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = `Failed to fetch Pokemon with ID ${this.pokemonId}`;
        this.isLoading = false;
        console.error('Error fetching Pokemon:', error);
      },
    });
  }

  // Helper method to transform API response to your pokemon model
  transformPokemonData(data: any): pokemon {
    console.log('Transforming Pokemon Data:', data);
    return {
      sprites: {
        front_default: data.sprites.front_default,
        other: {
          'official-artwork': {
            front_default: data.sprites.other['official-artwork'].front_default,
          },
        },
      },
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      base_experience: data.base_experience,
      location_area_encounters: data.location_area_encounters,
      moves: data.moves.map((moveData: any) => ({
        move: {
          name: moveData.move.name,
          url: moveData.move.url,
        },
      })),
      type: data.types.map((typeData: any) => ' ' + typeData.type.name), // Simplify to just the name
      abilities: data.abilities.map(
        (abilityData: any) => ' ' + abilityData.ability.name
      ), // Simplify to just the name
    };
  }

  // No need for subscription in ngOnDestroy as it leads to memory leaks
  ngOnDestroy() {
    // Clean up subscriptions if needed, but don't create new ones
  }
}
