import { Injectable } from '@angular/core';
// Models
import { Degree } from '../models/degree.model';

@Injectable({
  providedIn: 'root'
})
export class DegreesService {
  private _degrees: Degree[] = [];

  constructor() {
    this.generateDegrees();
  }

  get degrees(): Degree[] {
    return this._degrees;
  }
  set degrees(degrees: Degree[]) {
    this._degrees = degrees;
  }

  private generateDegrees(): void {
    const degrees: Degree[] = [];
    const developpeurLogiciel = new Degree(
      3,
      'Bac +2 Développeur Logiciel',
      new Date(2016, 0, 1),
      true,
      `BAC+2 obtenu au sein de l'ENI école informatique à Chartre de Bretagne (Rennes). Diplôme orienté algorithme, langages de programmation et utilisation des frameworks.`,
      'assets/rapports/bac2-DL.pdf'
    );
    const concepteurDeveloppeur = new Degree(
      2,
      'BAC+4 Concepteur Developpeur Informatique',
      new Date(2017, 0, 1),
      true,
      `BAC+4 obtenu au sein de l'ENI école informatique à Chartre de Bretagne (Rennes). Diplôme orienté analyse et conception.`,
      'assets/rapports/bac4-CDI.pdf'
    );
    const mobileWebSpecialist = new Degree(
      1,
      'Certification Google - Mobile Web Specialist',
      new Date(2019, 0, 1),
      true,
      `Certification Mobile Web Specialist, que j'ai passé sur mon temps libre auprès de Google, afin d'améliorer et mettre en avant mes compétences dans le domaine.`
    );
    const ingenieurSystemeInformation = new Degree(
      0,
      `Ingénieur Informatique systèmes d'information`,
      new Date(2020, 0, 1),
      false,
      `Dernier diplôme qui est en cours d'obtention auprès du CNAM de Bretagne que j'effectue en cours du soir.`
    );
    degrees.push(ingenieurSystemeInformation);
    degrees.push(mobileWebSpecialist);
    degrees.push(concepteurDeveloppeur);
    degrees.push(developpeurLogiciel);
    this.degrees = degrees;
  }
}
