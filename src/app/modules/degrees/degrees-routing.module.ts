import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Containers
import * as fromContainers from './containers';

const routes: Routes = [
    {
        path: '',
        component: fromContainers.DegreesComponent,
        data: {
            breadcrumb: {
                label: 'Diplômes et certifications',
                url: 'degrees'
            }
        }
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DegreesRoutingModule { }
