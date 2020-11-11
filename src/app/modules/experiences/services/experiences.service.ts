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
      `
      Analyse et conception d'applications Web / Mobile / Desktop et d'API (WebServices) dans le domaine de l'immobilier.
      Avec : Angular, JavaFX, Ionic, VueJS, ReactJs, Laravel
      `,
      new Date(2017, 5, 1),
      new Date(2019, 2, 1)
    );
    const okelp = new Experience(
      1,
      'Full Stack Enginner',
      'OKELP - Rennes (35)',
      `Analyse et conception d'une application pour aider les personnes en situation de handicap dans la vie de tous les jours (Projet Pause).`,
      new Date(2018, 2, 1),
      new Date(2020, 9, 1)
    );
    const sodifrance = new Experience(
      2,
      'Tech Lead Front End',
      'Sodifrance - Saint Grégoire (35)',
      `J'ai eu l'occasion d'effectuer plusieurs missions pour Sodifrance : - Recherche et Developpement pour un client souhaitant rapidement mettre au point un prototype d'application dans le domaine du BTP. - Migration d'une application dans le domaine de l'assurance et gestion des incidents pour un grand compte. - Leader technique et Architect Front End pour un client dans le domaine de la certification.`,
      new Date(2019, 2, 1),
      new Date()
    );
    experiences.push(sodifrance);
    experiences.push(okelp);
    experiences.push(adbDev);
    this.experiences = experiences;
  }

}
