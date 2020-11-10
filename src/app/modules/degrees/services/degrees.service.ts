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
      2,
      'Bac +2 Développeur Logiciel',
      new Date(2016, 0, 1)
    );
    const concepteurDeveloppeur = new Degree(
      1,
      'BAC+4 Concepteur Developpeur Informatique',
      new Date(2017, 0, 1)
    );
    const mobileWebSpecialist = new Degree(
      0,
      'Certification Google - Mobile Web Specialist',
      new Date(2019, 0, 1)
    );
    degrees.push(mobileWebSpecialist);
    degrees.push(concepteurDeveloppeur);
    degrees.push(developpeurLogiciel);
    this.degrees = degrees;
  }
}
