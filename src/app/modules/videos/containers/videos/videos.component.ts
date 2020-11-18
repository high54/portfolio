import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ngOnInit(): void {
  }
  public redirect(video: any): void {
    this.router.navigateByUrl(`videos/${video.id}`);
  }
}
