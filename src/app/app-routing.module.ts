
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculasComponent } from './components/Peliculas/peliculas.component';
import { PELICULAROUTES } from './components/Peliculas/peliculas.routes';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { UploadimagesComponent } from './components/uploadimages/uploadimages.component';
import { IMAGESROUTE } from './components/uploadimages/images.routes';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'peliculas', 
  component:PeliculasComponent,
  children:PELICULAROUTES
 },
 { path: 'youtube', component: YoutubeComponent },
 { path: 'imagenes', component: UploadimagesComponent,
children:IMAGESROUTE },
 
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
