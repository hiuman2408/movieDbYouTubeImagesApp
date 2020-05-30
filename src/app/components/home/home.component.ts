import { MoviesService } from './../../service/movies.service';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  PeliculasPopulares: any;

  peliculasPolularesNinos: any;
  peliculasEstrenos:any;

  constructor(private _serMovie:MoviesService,private router:Router) {

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

  IrPeliculas(pagina:string){
    //console.log("peliculas")
    this.router.navigateByUrl(`${pagina}`);
  }

}
