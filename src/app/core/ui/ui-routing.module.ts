import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Containers
import * as fromContainers from './containers';

const routes: Routes = [
    {
        path: '',
        component: fromContainers.LandingPageComponent
    },
    {
        path: 'cookies',
        component: fromContainers.CookiesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UIRoutingModule { }
