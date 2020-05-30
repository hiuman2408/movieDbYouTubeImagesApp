
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient,HttpParams  } from '@angular/common/http';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apiKey = "AIzaSyC0PGZvTVQZXKgy5BA469AWRI6lkWLD7aY";
  private urlYoutube = "https://www.googleapis.com/youtube/v3";
 // private playList = "UUuaPTYj15JSkETGnEseaFFg";
 private playList = "UUMn28O1sQGochG94HdlthbA"; //id de playlist
 
  private nextPageToken = "";

  constructor(private http:HttpClient) { }

  getVideos(){
   let url = `${this.urlYoutube}/playlistItems`;

    //let url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUuaPTYj15JSkETGnEseaFFg&key=AIzaSyC0PGZvTVQZXKgy5BA469AWRI6lkWLD7aY";
    const parametros = new HttpParams().set('part', 'snippet').set('playlistId', this.playList).set('maxResults', '9').set('key', this.apiKey);
    

    return this.http.get(url,{params:parametros}).pipe(map( (resp:any)=>{

      this.nextPageToken = resp.nextPageToken;

      let videos: any[] = [];
          for (let video of resp.items) {
            let _video = video.snippet;
            videos.push(_video);
          }
          return videos;

    }
       
      ))



  }
}
