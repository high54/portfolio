import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routes Module
import { ProjectsRoutingModule } from './projects-routing.module';
// Material Modules
import { ProjectsMaterialModule } from './projects-material.module';
// Containers
import * as fromContainers from './containers';
// Components
import * as fromComponents from './components';
// Services
import * as fromServices from './services';

@NgModule({
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        ProjectsMaterialModule
    ],
    declarations: [
        ...fromContainers.containers,
        ...fromComponents.components
    ],
    providers: [
        ...fromServices.services
    ]
})
export class ProjectsModule { }
