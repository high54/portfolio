import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// Routes Module
import { PublicationsRoutingModule } from './publications-routing.module';
// Material Modules
import { PublicationsMaterialModule } from './publications-material.module';
// Containers
import * as fromContainers from './containers';
// Components
import * as fromComponents from './components';
// Ngx Markdown
import { MarkdownModule } from 'ngx-markdown';
@NgModule({
    imports: [
        CommonModule,
        PublicationsRoutingModule,
        PublicationsMaterialModule,
        MarkdownModule.forRoot({ loader: HttpClient })
    ],
    declarations: [
        ...fromContainers.containers,
        ...fromComponents.components
    ],
    providers: []
})
export class PublicationsModule { }
