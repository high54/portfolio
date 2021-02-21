import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
// Services
import { VideosService } from '../../services';
import { AppService } from 'src/app/app.service';
// Interfaces
import { Item } from '../../models/video.interface';
import { Playlist } from '../../models/playlist.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy {
  public playlist!: Playlist;
  public selectedVideo: any;
  public isBrowser = false;
  private sub: Subscription | undefined;
  constructor(
    public sanitizer: DomSanitizer,
    private videosService: VideosService,
    private appService: AppService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.sub = this.videosService.playlists().subscribe(playlists => {
        this.playlist = playlists.filter((playlist) => playlist.url === params.id)[0];
        this.selectedVideo = this.playlist.videos[0];
        this.appService.title = this.playlist.title;
        this.appService.description = this.playlist.description;
      });
    });
  }
  public ngOnDestroy(): void {
    if (this.sub) { this.sub.unsubscribe(); }
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
