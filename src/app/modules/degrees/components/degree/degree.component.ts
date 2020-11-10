import { Component, OnInit, Input } from '@angular/core';
// Models
import { Degree } from '../../models/degree.model';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss']
})
export class DegreeComponent implements OnInit {
  @Input() degree: Degree;
  constructor() { }

  public ngOnInit(): void {
  }

}
