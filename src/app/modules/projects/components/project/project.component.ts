import { Component, Input } from '@angular/core';
// Models
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project!: Project;
  constructor() { }

  public openUrl(project: Project): void {
    window.open(project.link, '_blank');
  }

}
