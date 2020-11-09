import { Component, OnInit } from '@angular/core';
// Services
import { ExperiencesService } from '../../services';
import { AppService } from 'src/app/app.service';
// Models
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor(
    private expService: ExperiencesService,
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.title = 'Expériences professionnelle';
  }

  get experiences(): Experience[] {
    return this.expService.experiences;
  }

}
