import { Component, OnInit } from '@angular/core';
// Services
import { ProjectsService } from '../../services';
import { AppService } from 'src/app/app.service';
// Models
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projectsService: ProjectsService,
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.title = 'Projets personnel';
  }

  get projects(): Project[] {
    return this.projectsService.projects;
  }

}
