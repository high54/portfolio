import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Containers
import * as fromContainers from './containers';

const routes: Routes = [
    {
        path: '',
        component: fromContainers.ContactComponent
    },
    {
        path: 'success',
        component: fromContainers.SuccessComponent,
        data: {
            breadcrumb: {
                label: 'Succcès !',
                url: 'success'
            }
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }

