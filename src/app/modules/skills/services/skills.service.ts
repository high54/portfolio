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
      `
      JavaScript est un langage très intéressant. Il permet via de nombreuses API d'intéragire grandement avec l'appareil de l'utilisateur tout en étant cross-plateforme.
      `
    );
    const typeScript = new Skill(
      1,
      'TypeScript',
      5,
      `TypeScript est une sur couche à JavaScript.
      Je concidère ce langage comme étant un langage de programmation côté développeur.
      `
    );
    const angular = new Skill(
      2,
      'Angular',
      5,
      `
      Angular, c'est un coup de coeur. Qu'on le veuille ou non, c'est le seul Framework JavaScript(TypeScript). Les "autres framework" ne sont que des bibliothèques à côté.
      Angular inclut tout ce qui est nécessaire au bon fonctionnement d'une application.
      Après, effectivement il faut concevoir des applications et non des sites internet avec. (Mon portfolio tourne sous Angular ;)).
      `
    );
    const vuejs = new Skill(
      3,
      'VueJs',
      3,
      `
      VueJs est une bibliothèque JavaScript incorporant le meilleur d'Angular et de ReactJs pour le développement de petite applications ou de sites internet.
      J'ai pratiqué VueJs directement sur une grosse application avec le stats management dès mon premier jour d'alternance.
      Par la suite j'ai eu l'occasion d'effectuer une formation dessus.
      `
    );
    const accessibility = new Skill(
      4,
      'Accéssibilité Web (A11Y)',
      3,
      `
      L'accéssibilité web est un point important dans la conception d'application web ou de site internet.
      Cela prends plusieurs formes, à commencer par celle des personnes en situation de handicap. Il y a une forme moins prise en compte, celle du manque de débit internet.
      Rendre une application web ou un site internet accéssible à tous et à toutes veut également dire, le rendre accéssible à ceux disposant d'un faible débit.
      `
    );
    const responsive = new Skill(
      5,
      'Responsive Design',
      4,
      `
      Une obligation dans le domaine du web !
      `
    );
    const rxJs = new Skill(
      6,
      'RxJs',
      5,
      `
      Reactive X for JavaScript est l'une de mes bibliothèques JavaScript favoris. C'est une bibliothèque qui fournit des API pour de la programmation asynchrone avec des flux observable.
      Très important dans le domaine du web. Point positif, Angular a était construit avec.
      `
    );
    const git = new Skill(
      7,
      'Git',
      3,
      `
      Un incontournable dans le monde de la programmation !
      `
    );
    const ngrx = new Skill(
      8,
      'NgRx',
      3,
      `
      Du state management basé sur le pattern Redux et la bibliothèque RxJs pour Angular.
      `
    );
    const pwa = new Skill(
      9,
      'Progressive Web Application',
      4,
      `
      Le meilleur du web. Développer une application web, ajouter du responsive, et la rendre installable sur les appareils utilisateur. (Vous vous trouvez sur une PWA :) ).
      `
    );
    const english = new Skill(
      10,
      'Anglais professionnel',
      4,
      `
      Le monde informatique étant dominé par la Silicon Valley (USA), il est indispensable de savoir lire l'Anglais.
      `
    );
    const gitlab = new Skill(
      11,
      'Gitlab',
      4,
      `
      Ma forge logiciel favorite ! J'adore bidouiller sur GitLab et automatiser mes applications dessus !
      `
    );
    const ssr = new Skill(
      12,
      'Server Side Rendering',
      4,
      `
      Important quand il s'agit de perfomance sur le web ! (Le portfolio utilise également du Rendu Côté Serveur :) ).
      `
    );
    const nodeJs = new Skill(
      13,
      'NodeJs',
      3,
      `
      `
    );
    const ux = new Skill(
      14,
      'Expérience utilisateur (UX)',
      4,
      `
      À vous de me le dire ! N'hésitez pas à m'envoyer un message depuis la section Contact afin de me dire vous avez apprécier votre expérience sur cette application !
      `
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
