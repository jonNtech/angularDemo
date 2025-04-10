import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './Pages/pokemon/pokemon.component';
import { HomeComponent } from './Pages/home/home.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'pokemon',
    loadComponent: () => {
      return import('./Pages/pokemon/pokemon.component').then(
        (m) => m.PokemonComponent
      );
    },
  },
  { path: '**', component: NotFoundComponent },
];
