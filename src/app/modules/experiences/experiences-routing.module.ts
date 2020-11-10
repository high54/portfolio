import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Containers
import * as fromContainers from './containers';

const routes: Routes = [
    {
        path: '',
        component: fromContainers.ExperiencesComponent,
        data: {
            breadcrumb: {
              label: 'Expérience professionnelle',
              url: '/'
            }
          }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExperiencesRoutingModule { }
