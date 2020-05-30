import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  
  @Input() Movies: any;
  @Input() titulo: string;
  constructor(private router:Router) { }

  ngOnInit() {
  }


  peliculaDetalle(idPelicula:string){

    console.log(idPelicula)
    this.router.navigateByUrl(`peliculas/pelicula/${idPelicula}`);

    localStorage.setItem('pagAnterior','homepeliculas')

  }

}
