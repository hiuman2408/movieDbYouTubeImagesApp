import { MoviesService } from '../../../service/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css']
})
export class MoviecardComponent implements OnInit {

  paginaAnterior:string;
  movie: any = {};
  videosMovie:any[]=[]; //para los videos

  actoresMovie:any[]=[]
  constructor(private router:ActivatedRoute,private _sMovie:MoviesService,
    private rout:Router) {


    this.paginaAnterior = localStorage.getItem('pagAnterior')

   console.log(this.paginaAnterior)

   
    
    //OBTNER DATOS DE LA PELICULA
    this.router.params.subscribe(params=>{

       let idPelicula=params['id'];

      this._sMovie.obtenerPelicula(idPelicula).subscribe(pelicula=>{

        this.movie=pelicula
      // console.log(this.movie)
      })

     //OBTENER LOS VIDEOS PELICULAS
      this._sMovie.obtnerTrailerPeicula(idPelicula).subscribe((video:[])=>{
        this.videosMovie = video;
       // console.log(this.videosMovie)
      })
      
      //OBTENER LOS ACTORES DE LA PELICLUA
       this._sMovie.actoresPeicula(idPelicula).subscribe((actores:[])=>{

        this.actoresMovie = actores.slice(0,6) ;
          console.log(this.actoresMovie)
       })



     
    })
   }

  ngOnInit() {
  }

  regresar(){
    this.rout.navigateByUrl(`peliculas/${this.paginaAnterior}`);
  }

}
