import { Injectable } from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'
//import * as firebase from 'firebase'
import * as firebase from 'firebase/app'
import { Imagen } from '../interface/imagen';
import { FileItem } from '../models/file-item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CargaImagenesService {

  private imagenCollection: AngularFirestoreCollection<Imagen>;
  private CARPETA_IMAGENES='img';
 // imagenes: Imagen[];

  constructor(private dbAngularfirestore:AngularFirestore) {

    this.imagenCollection = dbAngularfirestore.collection<Imagen>('img');

   }



  


 //  SAVE IMAGE EN FIRESTORE
  guardarImagen(imagen:Imagen){

    this.dbAngularfirestore.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);

  }

  //GET ALL IMAGENES DE FIRESTORE

  getAllImagenes(): Observable<Imagen[]>{
    return  this.imagenCollection.valueChanges().pipe(map(data=>{
             return  data;
    }))
  }



}
