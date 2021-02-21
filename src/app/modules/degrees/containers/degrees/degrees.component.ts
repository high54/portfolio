import { Component, OnInit } from '@angular/core';
// Services
import { AppService } from 'src/app/app.service';
import { DegreesService } from '../../services/degrees.service';
// Models
import { Degree } from '../../models/degree.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent implements OnInit {
  public degrees$: Observable<Degree[]> = this.degreesService.degrees();
  constructor(
    private degreesService: DegreesService,
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.title = `Diplômes et certifications`;
    this.appService.description = `
    Les diplômes et certifications présent ici ne reflète qu'une partie du travail que j'ai effectué pour améliorer
        mes compétences dans le domaine de l'informatique. Que ce soit au niveau fonctionnel ou métier.`;
  }


}
