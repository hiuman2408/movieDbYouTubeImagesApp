import { Routes } from '@angular/router';
import { HomepeliculasComponent } from './homepeliculas/homepeliculas.component';
import { SearchComponent } from './search/search.component';
import { MoviecardComponent } from './moviecard/moviecard.component';


export const PELICULAROUTES: Routes = [

    { path: 'homepeliculas', component: HomepeliculasComponent },
    { path: 'buscar', component: SearchComponent },
    { path: 'pelicula/:id', component: MoviecardComponent },
     
     { path: '**', pathMatch: 'full', redirectTo: 'homepeliculas' }
  ];