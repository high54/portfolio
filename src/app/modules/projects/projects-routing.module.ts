import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Containers
import * as fromContainers from './containers';
const routes: Routes = [
    {
        path: '',
        component: fromContainers.ProjectsComponent,
        data: {
            breadcrumb: {
                label: 'Projets',
                url: 'projects'
            }
        }
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }
