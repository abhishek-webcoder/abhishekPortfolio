import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';

export const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: 'hero', component: HeroComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
];
