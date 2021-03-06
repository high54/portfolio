import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'experiences',
    loadChildren: () => import('./modules/experiences/experiences.module').then((m) => m.ExperiencesModule),
    data: {
      breadcrumb: {
        label: 'Expérience professionnelle',
        url: '/'
      },
      animation: 'experiences'
    }
  },
  {
    path: 'skills',
    loadChildren: () => import('./modules/skills/skills.module').then((m) => m.SkillsModule),
    data: {
      breadcrumb: {
        label: 'Compétences',
        url: 'skills'
      },
      animation: 'skills'
    }
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module').then((m) => m.ProjectsModule),
    data: {
      breadcrumb: {
        label: 'Projets personnel',
        url: 'projects'
      },
      animation: 'projects'
    }
  },
  {
    path: 'degrees',
    loadChildren: () => import('./modules/degrees/degrees.module').then((m) => m.DegreesModule),
    data: {
      breadcrumb: {
        label: 'Diplômes et certifications',
        url: 'degrees'
      },
      animation: 'degrees'
    }
  },
  {
    path: 'publications',
    loadChildren: () => import('./modules/publications/publications.module').then((m) => m.PublicationsModule),
    data: {
      breadcrumb: {
        label: 'Publications',
        url: 'publications'
      },
      animation: 'publications'
    }
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then((m) => m.ContactModule),
    data: {
      breadcrumb: {
        label: 'Me Contacter',
        url: 'contact'
      },
      animation: 'contact'
    }
  },
  {
    path: 'videos',
    loadChildren: () => import('./modules/videos/videos.module').then((m) => m.VideosModule),
    data: {
      breadcrumb: {
        label: 'Vidéos',
        url: 'videos'
      },
      animation: 'videos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'top',
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
