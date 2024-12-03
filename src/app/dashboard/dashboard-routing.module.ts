import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbpageComponent } from './dbpage/dbpage.component';

const routes: Routes = [
  {path:'',component:DbpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
