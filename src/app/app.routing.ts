import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RosterComponent } from './roster/roster.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './landing/about.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'roster',
    component: RosterComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
