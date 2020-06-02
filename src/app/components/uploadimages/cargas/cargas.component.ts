import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CargaImagenesService } from '../../../service/cargaimagenes.service';
import { FileItem } from '../../../models/file-item';
import { Imagen } from '../../../interface/imagen';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.component.html',
  styleUrls: ['../uploadimages.component.css']
})
export class CargasComponent implements OnInit {

  @Output() onChange: EventEmitter<File> = new EventEmitter<File>();

  source:string = '';
 // completed:boolean;
  nombreImagen:string=''; //nombre imagen
  tamanoImagen:string='';  //tamaño imagen
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;;
  file:File;

  

  constructor(private storage: AngularFireStorage,private _svimagen:CargaImagenesService) { }

  ngOnInit() {
  }

  updateSource($event: Event) {

    this.file=$event.target['files'][0];

    //compruena si es una imagen
    
    if (!(/\.(jpg|png|gif)$/i).test(this.file.name)) {

      alert('El archivo a adjuntar no es una imagen');
      return;
  }
  
  //validadr el tañamo de la imagen
  if (this.file.size > 200000) {
                alert('El peso de la imagen no puede exceder los 200MB')

    return;
  }

  //OTRA FORMA DE VALIDAR FORMATOS
 let index = this.file.name.lastIndexOf(".");
  let strsubstring = this.file.name.substring(index, this.file.name.length);
  if (strsubstring === '.jpg'|| strsubstring === '.jpeg' || strsubstring === '.png' || strsubstring === '.gif'){
    console.log(" Si es una Imagen " )
  }
    
  //


    //console.log($event.target['files'][0])
   this.nombreImagen=$event.target['files'][0].name;
   this.tamanoImagen=($event.target['files'][0].size/1000).toString() + ' kb';
  
    if($event.target['files']){
      let reader = new FileReader;
      reader.readAsDataURL($event.target['files'][0]);
      reader.onload = (e: any) => {
        this.source = e.target.result;        
    }

    }

   
  }

  cargaImagenes(){

   
  }


  cargaImagen(){
    
    
    const file = this.file;
    const filePath = `uploads/${this.nombreImagen}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(urlImage => {
           // this.completed = true;
            let imagen:Imagen={
              nombre:this.nombreImagen,
              url:urlImage
            }

            this._svimagen.guardarImagen(imagen)

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: this.nombreImagen,
              text:'se Guardo correctamente',
              showConfirmButton: true,
              //timer: 1500
            })




            //console.log(urlImage)
            
          });
        })
      ).subscribe();

    
  }

  limpiar(){

   

  }


  

  





}
