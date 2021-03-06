import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Routes Module
import { SkillsRoutingModule } from './skills-routing.module';
// Material Modules
import { SkillsMaterialModule } from './skills-material.module';
// Containers
import * as fromContainers from './containers';
// Components
import * as fromComponents from './components';
// Services
import * as fromServices from './services';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SkillsRoutingModule,
        SkillsMaterialModule
    ],
    declarations: [
        ...fromContainers.containers,
        ...fromComponents.components
    ],
    providers: [
        ...fromServices.services
    ]
})
export class SkillsModule { }
