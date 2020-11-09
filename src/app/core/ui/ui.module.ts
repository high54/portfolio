import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routes Module
import { UIRoutingModule } from './ui-routing.module';
// Angular Material Module
import { UIMaterialModule } from './ui-material.module';
// Containers
import * as fromContainers from './containers';
// Components
import * as fromComponents from './components';

@NgModule({
    imports: [
        CommonModule,
        UIRoutingModule,
        UIMaterialModule
    ],
    declarations: [
        ...fromContainers.containers,
        ...fromComponents.components
    ],
    exports: [
        ...fromComponents.components
    ],
    providers: []
})
export class UIModule { }
