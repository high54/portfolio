import { Component, OnInit, Input } from '@angular/core';
// Models
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() experience: Experience;
  constructor() { }

  ngOnInit(): void {
  }

}
