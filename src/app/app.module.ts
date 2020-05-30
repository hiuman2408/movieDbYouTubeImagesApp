import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/Peliculas/search/search.component';
import { MoviecardComponent } from './components/Peliculas/moviecard/moviecard.component';
import { SharedComponent } from './components/Peliculas/shared/shared.component';
import { MoviesService } from './service/movies.service';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ImagePipe } from './pipes/image.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PeliculasComponent } from './components/Peliculas/peliculas.component';
import { HomepeliculasComponent } from './components/Peliculas/homepeliculas/homepeliculas.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { YoutubeService } from './service/youtube.service';
import { YoutubePipe } from './pipes/youtube.pipe';
import { UploadimagesComponent } from './components/uploadimages/uploadimages.component';
import { FotosComponent } from './components/uploadimages/fotos/fotos.component';
import { CargasComponent } from './components/uploadimages/cargas/cargas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    MoviecardComponent,
    SharedComponent,
    ImagePipe,
    DomseguroPipe,
    PeliculasComponent,
    HomepeliculasComponent,
    YoutubeComponent,
    YoutubePipe,
    UploadimagesComponent,
    FotosComponent,
    CargasComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [
    MoviesService,
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
