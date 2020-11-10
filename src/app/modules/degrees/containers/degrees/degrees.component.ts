import { Component, OnInit } from '@angular/core';
// Services
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.title = `Diplômes et certifications`;
  }

}
