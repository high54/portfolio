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
      5,
      ''
    );
    const typeScript = new Skill(
      1,
      'TypeScript',
      5,
      ''
    );
    const angular = new Skill(
      2,
      'Angular',
      5,
      ''
    );
    const vuejs = new Skill(
      3,
      'VueJs',
      3,
      ''
    );
    const accessibility = new Skill(
      4,
      'Accéssibilité Web (A11Y)',
      3,
      ''
    );
    const responsive = new Skill(
      5,
      'Responsive Design',
      4,
      ''
    );
    const rxJs = new Skill(
      6,
      'RxJs',
      5,
      ''
    );
    const git = new Skill(
      7,
      'Git',
      3,
      'Description'
    );
    const ngrx = new Skill(
      8,
      'NgRx',
      3,
      'State management'
    );
    const pwa = new Skill(
      9,
      'Progressive Web Application',
      4,
      'Application'
    );
    const english = new Skill(
      10,
      'Anglais professionel',
      4,
      'Parle en anglais izi'
    );
    const gitlab = new Skill(
      11,
      'Gitlab',
      4,
      'Forge logiciel'
    );
    const ssr = new Skill(
      12,
      'Server Side Rendering',
      4,
      'Rendu côté serveur'
    );
    const nodeJs = new Skill(
      13,
      'NodeJs',
      3,
      'Developpement côté serveur'
    );
    const ux = new Skill(
      14,
      'Expérience utilisateur (UX)',
      4,
      'À Vous de me le dire !'
    );
    skills.push(angular);
    skills.push(typeScript);
    skills.push(javaScript);
    skills.push(vuejs);
    skills.push(accessibility);
    skills.push(responsive);
    skills.push(rxJs);
    skills.push(git);
    skills.push(pwa);
    skills.push(ngrx);
    skills.push(english);
    skills.push(gitlab);
    skills.push(ssr);
    skills.push(nodeJs);
    skills.push(ux);
    this.skills = skills.sort((a, b) => b.level - a.level);
  }
}
