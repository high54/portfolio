import { Component, OnInit } from '@angular/core';
// Services
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-zms-ionic',
  templateUrl: './zms-ionic.component.html',
  styleUrls: ['./zms-ionic.component.scss']
})
export class ZmsIonicComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.title = 'Tutoriel ZMS et Ionic 3';
  }

}
