import { Component, OnInit } from '@angular/core';
import { Imagen } from '../../../interface/imagen';
import { CargaImagenesService } from '../../../service/cargaimagenes.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent implements OnInit {

  imagenes: Imagen[];

  constructor( private _scImagenes:CargaImagenesService) { 

    this._scImagenes.getAllImagenes().subscribe(imagenes=>{
      this.imagenes = imagenes;
      
    })

    


  }

  ngOnInit() {
  }

}
