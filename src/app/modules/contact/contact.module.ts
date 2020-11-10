import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Routes Module
import { ContactRoutingModule } from './contact-routing.module';
// Material Modules
import { ContactMaterialModule } from './contact-material.module';
// Containers
import * as fromContainers from './containers';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ContactRoutingModule,
        ContactMaterialModule
    ],
    declarations: [
        ...fromContainers.containers
    ],
    providers: []
})
export class ContactModule { }
