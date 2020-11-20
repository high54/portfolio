import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Containers
import * as fromContainers from './containers';

const routes: Routes = [
    {
        path: '',
        component: fromContainers.VideosComponent
    },
    {
        path: ':id',
        component: fromContainers.VideoComponent,
        data: {
            breadcrumb: {
                label: '',
                url: ''
            }
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VideosRoutingModule { }
