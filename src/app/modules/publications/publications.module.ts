import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routes Module
import { PublicationsRoutingModule } from './publications-routing.module';
// Material Modules
import { PublicationsMaterialModule } from './publications-material.module';
// Containers
import * as fromContainers from './containers';
// Components
import * as fromComponents from './components';

@NgModule({
    imports: [
        CommonModule,
        PublicationsRoutingModule,
        PublicationsMaterialModule
    ],
    declarations: [
        ...fromContainers.containers,
        ...fromComponents.components
    ],
    providers: []
})
export class PublicationsModule { }
