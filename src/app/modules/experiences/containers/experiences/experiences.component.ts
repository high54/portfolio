import { Component, OnInit } from '@angular/core';
// Services
import { ExperiencesService } from '../../services';
import { AppService } from 'src/app/app.service';
// Models
import { Experience } from '../../models/experience.interface';
// Rxjs
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  public experiences$: Observable<Experience[]> = this.expService.experiences();
  constructor(
    private expService: ExperiencesService,
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.title = 'Expériences professionnelle';
    this.appService.description = `C'est en forgeant qu'on devient forgeron.`;
  }


}
