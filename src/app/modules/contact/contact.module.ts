import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Routes Module
import { ContactRoutingModule } from './contact-routing.module';
// Material Modules
import { ContactMaterialModule } from './contact-material.module';
// Containers
import * as fromContainers from './containers';
// Services
import * as fromServices from './services';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        ContactRoutingModule,
        ContactMaterialModule
    ],
    declarations: [
        ...fromContainers.containers
    ],
    providers: [
        ...fromServices.services
    ]
})
export class ContactModule { }
