import { Component, OnInit } from '@angular/core';
// Services
import { ProjectsService } from '../../services';
// Models
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
  }

  get projects(): Project[] {
    return this.projectsService.projects;
  }

}
