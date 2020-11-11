import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
const materialModules: any[] = [
    MatIconModule
];

@NgModule({
    imports: [
        ...materialModules
    ],
    exports: [
        ...materialModules
    ]
})
export class DegreesMaterialModule { }
