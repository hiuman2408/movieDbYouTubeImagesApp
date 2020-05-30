import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-homepeliculas',
  templateUrl: './homepeliculas.component.html',
  styles: []
})
export class HomepeliculasComponent implements OnInit {
  
  PeliculasPopulares: any;

  peliculasPolularesNinos: any;
  peliculasEstrenos:any;
  constructor(private _serMovie:MoviesService) {

    localStorage.removeItem('terminoBusqueda');
   }

  ngOnInit() {
   this._serMovie.getPopulares().subscribe( (data:any[])=>{

    this.PeliculasPopulares = data;

    //console.log(this.PeliculasPopulares)


   });


   this._serMovie.getPopularesNinos().subscribe(resp=>{

    this.peliculasPolularesNinos = resp;
   });

   this._serMovie.getNoviesEstrenos().subscribe(resp=>{
     this.peliculasEstrenos=resp;
     //console.log(this.peliculasEstrenos)
   })
  }

}
