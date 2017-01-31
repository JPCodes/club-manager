import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RosterComponent } from './roster/roster.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'roster',
    component: RosterComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
