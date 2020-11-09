import { Injectable } from '@angular/core';
// Models
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private _projects: Project[] = [];
  constructor() {
    this.generateProjects();
  }

  get projects(): Project[] {
    return this._projects;
  }
  set projects(projects: Project[]) {
    this._projects = projects;
  }

  private generateProjects(): void {
    const ngFast = new Project(
      0,
      'Ng Fast App',
      `Création d'une CLI pour l'automatisation de la création d'application sous Angular, avec l'installation d'Angular Material, l'ouverture de VS Code et de lancement du serveur de développement.`,
      'https://github-link-card.s3.ap-northeast-1.amazonaws.com/high54/ngfast.png',
      'https://github.com/high54/ngfast'
    );
    const ngxAgenda = new Project(
      1,
      'Ngx Agenda',
      `Création d'un agenda comme celui de Google Agenda pour Angular.`,
      'https://github-link-card.s3.ap-northeast-1.amazonaws.com/high54/ng-agenda.png',
      'https://github.com/high54/ng-agenda'
    );
    const angularXStarter = new Project(
      2,
      'Angular X Starter',
      `Création d'un projet disposant de toutes les fonctionnalités avancé d'Angular ainsi que des meilleurs pratique de développement pour industrialisé la création d'application web, de bureau et pour smartphone.`,
      'https://github-link-card.s3.ap-northeast-1.amazonaws.com/high54/angular-x-starter.png',
      'https://github.com/high54/angular-x-starter'
    );
    const angular6SocialLogin = new Project(
      3,
      'Angular 6 Social Login',
      `Composant Angular pour l'ajout rapide des boutons de connexion Google, Facebook, Twitter et LinkedIn`,
      'https://github-link-card.s3.ap-northeast-1.amazonaws.com/high54/angular-6-social-login.png',
      'https://github.com/high54/angular-6-social-login'
    );
    const communesFranceJson = new Project(
      4,
      'Communes France JSON',
      'Liste des communes de France au format JSON',
      'https://github-link-card.s3.ap-northeast-1.amazonaws.com/high54/Communes-France-JSON.png',
      'https://github.com/high54/Communes-France-JSON'
    );
    this.projects.push(angularXStarter);
    this.projects.push(communesFranceJson);
    this.projects.push(angular6SocialLogin);
    this.projects.push(ngFast);
    this.projects.push(ngxAgenda);
  }

}
