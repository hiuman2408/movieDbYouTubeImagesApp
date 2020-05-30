import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {
  
  constructor(private domSanitizer: DomSanitizer){}

  transform(value: any): any {
    let url = "https://www.youtube.com/embed/";
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
