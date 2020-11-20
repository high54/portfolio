import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Containers
import * as fromContainers from './containers';

const routes: Routes = [
    {
        path: '',
        component: fromContainers.PublicationsComponent
    },
    {
        path: 'zms-ionic',
        component: fromContainers.ZmsIonicComponent,
        data: {
            breadcrumb: {
                label: 'Mobile App avec ZMS et Ionic 3',
                url: 'zms-ionic'
            }
        }
    },
    {
        path: 'ngx-input-time-directive',
        component: fromContainers.NgxInputTimeDirectiveComponent,
        data: {
            breadcrumb: {
                label: 'Angular - Custom Input Time Directive',
                url: 'ngx-input-time-directive'
            }
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicationsRoutingModule { }
