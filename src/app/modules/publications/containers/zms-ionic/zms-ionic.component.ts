import { Component, OnInit } from '@angular/core';
// Services
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-zms-ionic',
  templateUrl: './zms-ionic.component.html',
  styleUrls: ['./zms-ionic.component.scss']
})
export class ZmsIonicComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.title = 'Tutoriel ZMS et Ionic 3';
    this.appService.description = `
    Dans le cadre du stage de fin d'année de BAC+2 j'ai eu pour mission de rédiger un tutoriel sur
    l'utilisation
    du langage de programmation ZMS et l'utilisateur des services de ZetaPush. Le tutoriel présente comment
    utiliser les services en réalisant une application mobile avec Ionic.
    `;
  }

}
