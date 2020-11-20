import { Component, OnInit } from '@angular/core';
// Services
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-ngx-input-time-directive',
  templateUrl: './ngx-input-time-directive.component.html',
  styleUrls: ['./ngx-input-time-directive.component.scss']
})
export class NgxInputTimeDirectiveComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.title = 'Angular - Custom Input Time Directive';
    this.appService.description = `
    Je développe actuellement un Agenda de type Google Agenda. Proposant presque toutes les fonctionnalités
    du
    dit agenda.

    Lorsque j'ai voulus ajouter le support des heures à l'ajout de rendez-vous je me suis retrouvé face au
    problème du champ de type heure et minute.

    Ne disposant pas d'un champ de type heure / minute adapté à mes besoins, j'ai décidé de mettre en place
    une
    directive sous Angular afin de palier à ce problème.

    Cette directive a pour but de formater un champ de type texte au format : HH: MM et de vérifier la
    saisie
    utilisateur.`;
  }

}
