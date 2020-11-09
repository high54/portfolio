import { Injectable } from '@angular/core';
// Models
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private _skills: Skill[] = [];
  constructor() {
    this.generateSkills();
  }

  get skills(): Skill[] {
    return this._skills;
  }
  set skills(skills: Skill[]) {
    this._skills = skills;
  }

  private generateSkills(): void {
    const skills: Skill[] = [];
    const javaScript = new Skill(
      0,
      'JavaScript',
      5
    );
    const typeScript = new Skill(
      1,
      'TypeScript',
      5
    );
    const angular = new Skill(
      2,
      'Angular',
      5
    );
    const vuejs = new Skill(
      3,
      'VueJs',
      3
    );
    const accessibility = new Skill(
      4,
      'Accéssibilité Web (A11Y)',
      4
    );
    const responsive = new Skill(
      5,
      'Responsive Design',
      4
    );
    const rxJs = new Skill(
      6,
      'RxJs',
      5
    );
    skills.push(angular);
    skills.push(typeScript);
    skills.push(javaScript);
    skills.push(rxJs);
    skills.push(accessibility);
    skills.push(responsive);
    skills.push(vuejs);
    this.skills = skills;
  }
}
