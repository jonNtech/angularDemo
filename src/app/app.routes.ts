import { Routes } from '@angular/router';
import { PokemonComponent } from './Pages/pokemon/pokemon.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'pokemon',
    loadComponent: () =>
      import('./Pages/pokemon/pokemon.component').then(
        (m) => m.PokemonComponent
      ),
  },
];

// In your Angular routing configuration, you have two different approaches for defining routes:
// Static Component Loading:
// This route configuration uses the component property to directly reference the HomeComponent. This is a straightforward method where the component is loaded synchronously. The component must be imported at the top of your routing module file, as seen with import { HomeComponent } from './Pages/home/home.component';. This approach is typically used when the component is small or frequently used, as it simplifies the configuration and ensures that the component is readily available.
// Lazy Loading with Dynamic Import:
// This route uses the loadComponent property with a dynamic import() statement. This method is used for lazy loading the component, meaning the PokemonComponent will only be loaded when the user navigates to the /pokemon route. This can improve the initial load time of your application because it reduces the size of the initial JavaScript bundle by splitting off the PokemonComponent into a separate chunk that's loaded only when needed. The import() function returns a promise, which resolves with the module containing PokemonComponent, and the then() method is used to extract the PokemonComponent class from the module.
// Summary:
// Static Loading: Immediate, synchronous loading of components, used for essential or lightweight components.
// Lazy Loading: Asynchronous, on-demand loading of components, used to improve initial load performance for larger or less frequently accessed components.
