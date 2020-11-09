import { Component, OnInit } from '@angular/core';
// Services
import { ExperiencesService } from '../../services';
// Models
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor(
    private expService: ExperiencesService
  ) { }

  ngOnInit(): void {
  }

  get experiences(): Experience[] {
    return this.expService.experiences;
  }

}
