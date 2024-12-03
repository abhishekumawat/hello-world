import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

import { ProjectComponent } from './project/project.component';
import { NewComponent } from './project/new/new.component';
import { ClientComponent } from './client/client.component';
import { User1Component } from './user1/user1.component';
import { NewclientComponent } from './client/newclient/newclient.component';
import { LeadsComponent } from './leads/leads.component';
import { AddleadsComponent } from './leads/addleads/addleads.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./project/project.module').then(n => n.ProjectModule)
  },
  {
    path:'new',component:NewComponent
  },
  {
    path:'client',component:ClientComponent
    
  },
  {path:'newclient',component:NewclientComponent},
  
  {
    path:'user1',component:User1Component
  },
  {
    path:'leads',component:LeadsComponent
  },
  {
    path:'addleads',component:AddleadsComponent
  },
  {
    path:'addleads',component:AddleadsComponent
  },
  {
    path:'dashboard',component:DashboardRoutingModule
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




