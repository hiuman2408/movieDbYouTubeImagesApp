import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.component.html',
  styleUrls: ['../uploadimages.component.css']
})
export class CargasComponent implements OnInit {

  @Output() onChange: EventEmitter<File> = new EventEmitter<File>();

  source:string = '';
  constructor() { }

  ngOnInit() {
  }

  updateSource($event: Event) {
    if($event.target['files']){
      let reader = new FileReader;
      reader.readAsDataURL($event.target['files'][0]);
      reader.onload = (e: any) => {
        this.source = e.target.result;        
    }

    }



  }




}
