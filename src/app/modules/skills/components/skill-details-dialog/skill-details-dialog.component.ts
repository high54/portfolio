import { Component, OnInit, Inject } from '@angular/core';
// Material
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// Models
import { Skill } from '../../models/skill.model';
@Component({
  selector: 'app-skill-details-dialog',
  templateUrl: './skill-details-dialog.component.html',
  styleUrls: ['./skill-details-dialog.component.scss']
})
export class SkillDetailsDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Skill
  ) { }

  ngOnInit(): void {
  }

}
