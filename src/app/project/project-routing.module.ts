import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {path:'',component:ProjectComponent},
  {path:'new',component:NewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
