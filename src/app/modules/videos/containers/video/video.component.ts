import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
// Services
import { VideosService } from '../../services';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  public video;
  public selectedVideo: any;
  public isBrowser = false;
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    public sanitizer: DomSanitizer,
    private videosService: VideosService,
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.video = this.videosService.videos[0];
    this.selectedVideo = this.video.playlist[0];
    this.appService.title = this.video.title;
    this.appService.description = this.video.description;
  }
  public selectVideo(video): void {
    if (this.selectedVideo.id !== video.id) {
      this.selectedVideo = video;
    }
  }
  public getUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
