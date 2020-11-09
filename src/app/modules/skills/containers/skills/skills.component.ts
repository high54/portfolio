import { Component, OnInit } from '@angular/core';
// Services
import { SkillsService } from '../../services';
import { AppService } from 'src/app/app.service';
// Models
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(
    private skillsService: SkillsService,
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.title = 'Compétences';
  }

  get skills(): Skill[] {
    return this.skillsService.skills;
  }

}
