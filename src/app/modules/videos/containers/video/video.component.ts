import { Component, OnInit } from '@angular/core';
// Services
import { VideosService } from '../../services';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class VideoComponent implements OnInit {
  public video;
  public selectedVideo: any;

  constructor(
    public sanitizer: DomSanitizer,
    private videosService: VideosService
  ) { }

  public ngOnInit(): void {
    this.video = this.videosService.videos[0];
    this.selectedVideo = this.video.playlist[0];
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
