import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'experiences',
    loadChildren: () => import('./modules/experiences/experiences.module').then((m) => m.ExperiencesModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./modules/skills/skills.module').then((m) => m.SkillsModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module').then((m) => m.ProjectsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
