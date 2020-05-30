
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) { }

  transform(pelicula:string): any {

    let url = "https://image.tmdb.org/t/p/w500";

     if (pelicula) {
      url += pelicula;
    }else {
      url = "./assets/img/noimage.png";
    }
    return url;
    // return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

