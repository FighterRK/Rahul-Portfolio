import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: 'intro', pathMatch: 'full' },
    { path: 'intro', loadComponent: () => import('./components/intro/intro.component').then(m => m.IntroComponent) },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
  { path: 'services', loadComponent: () => import('./components/services-section/services-section.component').then(m => m.ServicesSectionComponent) },
  { path: 'exp', loadComponent: () => import('./components/experiences/experiences.component').then(m => m.ExperiencesComponent) },
  { path: 'works', loadComponent: () => import('./components/works/works.component').then(m => m.WorksComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}