import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private _videos: any[] = [];
  constructor() {
    this.generateVideos();
  }
  get videos(): any[] {
    return this._videos;
  }
  set videos(videos: any[]) {
    this._videos = videos;
  }
  private generateVideos(): void {
    this.videos.push({
      id: 0,
      title: `Créer une To Do list avec Angular`,
      url: `creer-une-to-do-list-avec-angular`,
      subtitle: ``,
      description: `Création d'une application Todo List sous Angular. Code complet disponible sur GitHub : https://github.com/high54/ngx-todo-list`,
      img: 'assets/miniatures/todo.png',
      playlist: [
        {
          id: 0,
          title: `Mise en place de la structure de l'application`,
          link: 'https://www.youtube.com/embed/hCgQOEixqdM',
          duration: '4:26',
          type: 'video'
        },
        {
          id: 1,
          title: `Création et déclaration des composants`,
          link: 'https://www.youtube.com/embed/RfzV8TAdkTM',
          duration: '5:24',
          type: 'video'
        },
        {
          id: 2,
          title: `Ajout des templates HTML`,
          link: 'https://www.youtube.com/embed/QPnU38PVliA',
          duration: '5:24',
          type: 'video'
        },
        {
          id: 3,
          title: `Ajout du State et de getters`,
          link: 'https://www.youtube.com/embed/wlF3JMVhlS0',
          duration: '4:15',
          type: 'video'
        },
        {
          id: 4,
          title: `Binding de données`,
          link: 'https://www.youtube.com/embed/sn2CzJqR3mo',
          duration: '4:26',
          type: 'video'
        },
        {
          id: 5,
          title: `Emission d'évènements`,
          link: 'https://www.youtube.com/embed/uYauzvbHGXI',
          duration: '7:58',
          type: 'video'
        },
        {
          id: 6,
          title: `Sauvegarde des données en locale`,
          link: 'https://www.youtube.com/embed/lYhCmDipKoo',
          duration: '3:12',
          type: 'video'
        },
        {
          id: 7,
          title: 'Live exemple',
          link: 'https://stackblitz.com/edit/angular-ivy-ejxw2h?devtoolsheight=33&embed=1&file=src/app/todos/containers/todos/todos.component.ts',
          type: 'stackblitz'
        }
      ]
    });

    this.videos.push({
      id: 1,
      title: `Angular en détail`,
      url: `angular-en-detail`,
      subtitle: ``,
      description: `Dans une série de vidéos, j'entre dans les détails du fonctionnement des APIs et fonctionnalités d'Angular. Code complet disponible sur GitHub : https://github.com/high54/angular-en-detail`,
      img: 'assets/miniatures/en-detail.png',
      playlist: [
        {
          id: 0,
          title: `Décorateur @Input()`,
          link: 'https://www.youtube.com/embed/r6DAENg7Tb0',
          duration: '5:40',
          type: 'video'
        },
        {
          id: 1,
          title: `Décorateur @Ouput()`,
          link: 'https://www.youtube.com/embed/5Kf9ZOPVgOI',
          duration: '5:38',
          type: 'video'
        }
      ]
    });
  }
}