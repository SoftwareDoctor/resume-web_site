import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  // RIMOZIONE: La rotta '/resume' non è più necessaria
  // {
  //   path: 'resume',
  //   loadComponent: () => import('./components/resume/resume.component').then(m => m.ResumeComponent)
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
