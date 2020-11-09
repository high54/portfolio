import { Component, OnInit } from '@angular/core';
// Services
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.title = `À Propos`;
  }

}
