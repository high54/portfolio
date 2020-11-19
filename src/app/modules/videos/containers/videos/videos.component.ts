import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
// Services
import { VideosService } from '../../services';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html'
})
export class VideosComponent implements OnInit {
  public isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private videosService: VideosService,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  get videos(): any[] {
    return this.videosService.videos;
  }
  public ngOnInit(): void {
  }
  public redirect(video: any): void {
    this.router.navigateByUrl(`videos/${video.url}`);
  }

  public canShare(): boolean {
    return environment.production && this.isBrowser ? !!navigator.share : true;
  }
  public share(): void {
    if (this.isBrowser) {
      navigator.share({
        url: 'https://julienbertacco.netlify.app/videos/creer-une-to-do-list-avec-angular',
        text: 'Créer une To Do List avec Angular',
        title: 'Tutoriel vidéo - Créer une To Do List avec Angular'
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }
}
