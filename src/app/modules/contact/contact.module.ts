import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routes Module
import { ContactRoutingModule } from './contact-routing.module';
// Material Modules
import { ContactMaterialModule } from './contact-material.module';
// Containers
import * as fromContainers from './containers';

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        ContactMaterialModule
    ],
    declarations: [
        ...fromContainers.containers
    ],
    providers: []
})
export class ContactModule { }
