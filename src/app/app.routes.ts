import { Routes } from '@angular/router';
import { provideRouter, withRouterConfig } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjetosComponent } from './projetos/projetos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjetosComponent },
];
