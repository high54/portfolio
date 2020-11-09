import { Injectable } from '@angular/core';
// Models
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  private _experiences: Experience[] = [];
  constructor() {
    this.generateExperiences();
  }

  get experiences(): Experience[] {
    return this._experiences;
  }
  set experiences(experiences: Experience[]) {
    this._experiences = experiences;
  }

  private generateExperiences(): void {
    const experiences: Experience[] = [];
    const adbDev = new Experience(
      0,
      'Full Stack Enginner',
      'ADB DEV - Cesson Sévigné (35)',
      `Conception et réalisation d'application.`,
      new Date(2017, 5, 1),
      new Date(2019, 2, 1)
    );
    const okelp = new Experience(
      1,
      'Full Stack Enginner',
      'OKELP - Rennes (35)',
      `Conception et réalisation d'application.`,
      new Date(2018, 2, 1),
      new Date(2020, 9, 1)
    );
    const sodifrance = new Experience(
      2,
      'Tech Lead Front End',
      'Sodifrance - Saint Grégoire (35)',
      `Conception et réalisation d'application.`,
      new Date(2019, 2, 1),
      new Date()
    );
    experiences.push(sodifrance);
    experiences.push(okelp);
    experiences.push(adbDev);
    this.experiences = experiences;
  }

}
