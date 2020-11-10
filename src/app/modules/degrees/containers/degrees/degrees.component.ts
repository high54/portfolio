import { Component, OnInit } from '@angular/core';
// Services
import { AppService } from 'src/app/app.service';
import { DegreesService } from '../../services/degrees.service';
// Models
import { Degree } from '../../models/degree.model';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent implements OnInit {

  constructor(
    private degreesService: DegreesService,
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.title = `Diplômes et certifications`;
  }

  get degrees(): Degree[] {
    return this.degreesService.degrees;
  }

}
