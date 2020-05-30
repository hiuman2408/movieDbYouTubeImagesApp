import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  looding:boolean=true;
  buscar: string = "";
  //terminoBusqueda:string="";

  peliculas:any[]=[];

  constructor(private _sMovie:MoviesService,
            private router:Router) { 

              if(localStorage.getItem('terminoBusqueda')){
                console.log(localStorage.getItem('terminoBusqueda'))

                this.buscar=localStorage.getItem('terminoBusqueda');
                this.buscarPelicula(this.buscar)

              }
            }

  ngOnInit() {
  }

  buscarPelicula(textoBuscar:string){
    this.looding=false;

    this._sMovie.buscarPelicula(textoBuscar).subscribe(data=>{
      if(data){
        this.peliculas = data;
        localStorage.setItem('terminoBusqueda',this.buscar)

      }
      

      

      

    })
   // console.log(buscar)

   

  }

  peliculaDetalle(idMovie:string){
   console.log(idMovie)
   this.router.navigateByUrl(`peliculas/pelicula/${idMovie}`);
    
   
    localStorage.setItem('pagAnterior','buscar')

  }

}
