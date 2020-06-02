import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//peticiones hhtp
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

//forms
import { FormsModule } from '@angular/forms';


//rutas
import { AppRoutingModule } from './app-routing.module';

//componetes 

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/Peliculas/search/search.component';
import { MoviecardComponent } from './components/Peliculas/moviecard/moviecard.component';
import { SharedComponent } from './components/Peliculas/shared/shared.component';
import { PeliculasComponent } from './components/Peliculas/peliculas.component';
import { HomepeliculasComponent } from './components/Peliculas/homepeliculas/homepeliculas.component';

import { YoutubeComponent } from './components/youtube/youtube.component';


import { UploadimagesComponent } from './components/uploadimages/uploadimages.component';
import { FotosComponent } from './components/uploadimages/fotos/fotos.component';
import { CargasComponent } from './components/uploadimages/cargas/cargas.component';

//pipes 
import { YoutubePipe } from './pipes/youtube.pipe';
import { ImagePipe } from './pipes/image.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
//servicios 
import { CargaImagenesService } from './service/cargaimagenes.service';
import { YoutubeService } from './service/youtube.service';
import { MoviesService } from './service/movies.service';

//frebase angularfire2

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

//enviroments 
import { environment } from 'src/environments/environment';




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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    MoviesService,
    YoutubeService,
    CargaImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
