import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../service/youtube.service';
declare var $: any;
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  videos: any[] = [];
  videoSel: any;
  canal:string;

  constructor(private _sYoutube:YoutubeService) { 

    this._sYoutube.getVideos().subscribe((rsp:any)=>{
      
     this.canal=rsp[0].channelTitle;
     this.videos=rsp;
     console.log(this.canal)

     console.log(this.videos)


    });
  }

  verVideo(video: any) {
    this.videoSel = video;
    $('#myModal').modal();
  }
  cerrarModal() {
    this.videoSel = null;
    $('#myModal').modal("hide");
  }

  cargarMas() {
    this._sYoutube.getVideos().subscribe(videos => {
      console.log(videos);
      this.videos.push.apply(this.videos, videos);
    });
  }


  ngOnInit() {
  }

}
