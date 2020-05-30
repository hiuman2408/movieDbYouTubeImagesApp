import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private _domSanitizer: DomSanitizer){}

  transform(value: string): any {

      const url="https://www.youtube.com/embed/"; ///url que recibe del bom
    //console.log(url);
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url+value);
  }

}
