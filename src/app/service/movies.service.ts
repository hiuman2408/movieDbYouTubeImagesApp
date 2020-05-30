
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlMovie:string="https://api.themoviedb.org/3";
  private apiKey="1d21cc586064c63fc929aff1f97d0fcb";

  constructor(private http:HttpClient) {

    
   }

   getPopulares() {
    let url = `${this.urlMovie}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

    return this.http.get(url)
      .pipe(
        map((res:any)=> {
          return res.results
        })
      );
  }

  getPopularesNinos() {
    let url = `${this.urlMovie}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

    return this.http.get(url)
      .pipe(
        map((res:any) => {
          return res.results;
          
        })
      );
  }


  getNoviesEstrenos() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${(desde.getMonth() + 1)>9?(desde.getMonth() + 1): '0'+(desde.getMonth() + 1)}-${desde.getDate()>9?desde.getDate():'0'+desde.getDate()}`;
   
    
    let hastaStr = `${hasta.getFullYear()}-${(hasta.getMonth() + 1)>9?(hasta.getMonth() + 1): '0'+(hasta.getMonth() + 1)}-${hasta.getDate()>9?hasta.getDate():'0'+ hasta.getDate()}`;

    console.log(desdeStr +"  "+hastaStr)
    
   //let url = `${this.urlMovie}/discover/movie?primary_release_date.gte=2019-09-15&primary_release_date.lte=2019-10-22&api_key=${this.apiKey}&language=es`;

   let url = `${this.urlMovie}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es`

  

    return this.http.get(url)
      .pipe(
        map((res:any) => {
          return res.results;
        })
      );
  }


  obtenerPelicula(id: string) {
    let url = `${this.urlMovie}/movie/${id}?&api_key=${this.apiKey}&language=es`;

    return this.http.get(url)
      .pipe(
        map(res => {
          return res;
        })
      );
  }


  //OBTNER EL VIDEO DE LA PELICULA 

  obtnerTrailerPeicula(id:string){

    //https://api.themoviedb.org/3/movie/557/videos?api_key=1d21cc586064c63fc929aff1f97d0fcb&language=es

    let url=`${this.urlMovie}/movie/${id}/videos?&api_key=${this.apiKey}&language=es`
    return this.http.get(url)
      .pipe(
        map((res:any) => {
          //this.Peliculas = res.json().results;
          return res.results;
        })
      );

  }

  //LISTAR ACTORES 

  actoresPeicula(id:string){

    //http://api.themoviedb.org/3/movie/558/casts?api_key=1d21cc586064c63fc929aff1f97d0fcb

    let url=`${this.urlMovie}/movie/${id}/casts?&api_key=${this.apiKey}&language=es`
    return this.http.get(url)
      .pipe(
        map((res:any) => {
          //this.Peliculas = res.json().results;
          return res.cast;
        })
      );

  }

  //BUSCAR PELICULAS

  buscarPelicula(texto: string) {

    let url = `${this.urlMovie}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

    return this.http.get(url)
      .pipe(
        map((res:any) => {
          //this.Peliculas = res.json().results;
          return res.results;
        })
      );
  }


}
