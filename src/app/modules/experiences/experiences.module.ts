import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routes Module
import { ExperiencesRoutingModule } from './experiences-routing.module';
// Material Modules
import { ExperiencesMaterialModule } from './experiences-material.module';
// Containers
import * as fromContainers from './containers';
// Components
import * as fromComponents from './components';
// Services
import * as fromServices from './services';

@NgModule({
    imports: [
        CommonModule,
        ExperiencesRoutingModule,
        ExperiencesMaterialModule
    ],
    declarations: [
        ...fromContainers.containers,
        ...fromComponents.components
    ],
    providers: [
        ...fromServices.services
    ]
})
export class ExperiencesModule { }
