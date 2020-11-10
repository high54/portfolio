import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routes Module
import { DegreesRoutingModule } from './degrees-routing.module';
// Material Modules
import { DegreesMaterialModule } from './degrees-material.module';
// Containers
import * as fromContainers from './containers';
// Components
import * as fromComponents from './components';
@NgModule({
    imports: [
        CommonModule,
        DegreesRoutingModule,
        DegreesMaterialModule
    ],
    declarations: [
        ...fromContainers.containers,
        ...fromComponents.components
    ],
    providers: []
})
export class DegreesModule { }
