import { Component, OnInit } from '@angular/core';
// Services
import { SkillsService } from '../../services';
// Models
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(
    private skillsService: SkillsService
  ) { }

  ngOnInit(): void {
  }

  get skills(): Skill[] {
    return this.skillsService.skills;
  }

}
