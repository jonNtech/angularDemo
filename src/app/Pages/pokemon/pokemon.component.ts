import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import PokemonService from '../../Services/pokemon.service';
import { pokemon } from '../../Models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class PokemonComponent implements OnInit {
  apiData: any;
  error: string | null = null;
  isLoading: boolean = true; // Start with loading state
  pokemonData = signal<pokemon[]>([]);

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.fetchPokemonData();
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

  // No need for subscription in ngOnDestroy as it leads to memory leaks
  ngOnDestroy() {
    // Clean up subscriptions if needed, but don't create new ones
  }
}
