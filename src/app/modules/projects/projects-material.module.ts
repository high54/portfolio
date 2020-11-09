import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

const materialModules: any[] = [
    MatCardModule
];

@NgModule({
    imports: [
        ...materialModules
    ],
    exports: [
        ...materialModules
    ]
})
export class ProjectsMaterialModule { }
