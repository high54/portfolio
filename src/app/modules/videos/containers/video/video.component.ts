import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
// Services
import { VideosService } from '../../services';
import { AppService } from 'src/app/app.service';
// Interfaces
import { Item } from '../../models/video.interface';
import { Playlist } from '../../models/playlist.interface';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  public playlist!: Playlist;
  public selectedVideo: any;
  public isBrowser = false;
  constructor(
    public sanitizer: DomSanitizer,
    private videosService: VideosService,
    private appService: AppService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playlist = this.videosService.playlists.find((playlist) => playlist.url === params.id);
      this.selectedVideo = this.playlist.videos[0];
      this.appService.title = this.playlist.title;
      this.appService.description = this.playlist.description;
    });

  }
  public selectVideo(video: Item): void {
    if (this.selectedVideo.id !== video.id) {
      this.selectedVideo = video;
    }
  }
  public getUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
