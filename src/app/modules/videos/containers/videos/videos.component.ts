import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
// Services
import { VideosService } from '../../services';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  constructor(
    private videosService: VideosService,
    private router: Router
  ) { }
  get videos(): any[] {
    return this.videosService.videos;
  }
  public ngOnInit(): void {
  }
  public redirect(video: any): void {
    this.router.navigateByUrl(`videos/${video.url}`);
  }

  public canShare(): boolean {
    return environment.production ? !!navigator.share : true;
  }
  public share(): void {
    navigator.share({
      url: 'https://julienbertacco.netlify.app/videos/creer-une-to-do-list-avec-angular',
      text: 'Créer une To Do List avec Angular',
      title: 'Tutoriel vidéo - Créer une To Do List avec Angular'
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
}
