import { NgModule } from '@angular/core';
// Services
import * as fromServices from './services';

@NgModule({
    imports: [],
    declarations: [],
    providers: [
        ...fromServices.services
    ]
})
export class AccessibilityModule { }
