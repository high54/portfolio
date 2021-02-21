import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routes Module
import { VideosRoutingModule } from './videos-routing.module';
// Material Modules
import { VideosMaterialModule } from './video-material.module';
// Containers
import * as fromContainers from './containers';
// Services
import * as fromServices from './services';

@NgModule({
    imports: [
        CommonModule,
        VideosRoutingModule,
        VideosMaterialModule
    ],
    declarations: [
        ...fromContainers.containers
    ],
    providers: [
        ...fromServices.services
    ]
})
export class VideosModule { }
