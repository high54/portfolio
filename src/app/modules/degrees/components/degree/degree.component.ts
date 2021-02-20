import { Component, Input } from '@angular/core';
// Models
import { Degree } from '../../models/degree.model';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss']
})
export class DegreeComponent {
  @Input() degree: Degree | undefined;
  constructor() { }
}
