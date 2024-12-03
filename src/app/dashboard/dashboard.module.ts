import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DbpageComponent } from './dbpage/dbpage.component';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    DbpageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule, NgIf, MatButtonModule
  ]
})
export class DashboardModule { }
