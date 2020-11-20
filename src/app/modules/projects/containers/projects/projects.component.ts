import { Component, OnInit } from '@angular/core';
// Services
import { ProjectsService } from '../../services';
import { AppService } from 'src/app/app.service';
// Models
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projectsService: ProjectsService,
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.title = 'Projets personnel';
    let description = 'Quelques projets personnel réalisé sur mon temps libre :';
    for (const project of this.projects) {
      description += project.title;
    }
    this.appService.description = description;
  }

  get projects(): Project[] {
    return this.projectsService.projects;
  }

}
