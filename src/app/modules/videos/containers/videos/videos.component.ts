import { Component, OnInit, PLATFORM_ID, Inject, InjectionToken } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
// Services
import { VideosService } from '../../services';
import { AppService } from 'src/app/app.service';
import { Playlist } from '../../models/playlist.interface';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html'
})
export class VideosComponent implements OnInit {
  public isBrowser = false;
  constructor(
    @Inject(PLATFORM_ID) private platformId: InjectionToken<object>,
    private videosService: VideosService,
    private router: Router,
    private appService: AppService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  get playlists(): any[] {
    return this.videosService.playlists;
  }
  public ngOnInit(): void {
    this.appService.title = 'Liste des playlists';
    this.appService.description = `Cours vidéos sur Angular, TypeScript, JavaScript et le developpement d'application web`;
  }
  public redirect(video: any): void {
    this.router.navigateByUrl(`videos/${video.url}`);
  }
  public canShare(): boolean {
    return environment.production && this.isBrowser ? !!navigator.share : true;
  }
  public share(event: MouseEvent, playlist: Playlist): void {
    if (this.isBrowser) {
      event.stopPropagation();
      navigator.share({
        url: `https://julienbertacco.netlify.app/videos/${playlist.url}`,
        text: playlist.description,
        title: `Tutoriel vidéo - ${playlist.title}`
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  }
}
