import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { ProjectComponent } from './project/project.component';
import { Form } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomInterceptor } from './services/custom.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientComponent } from './client/client.component';
import { NewclientComponent } from './client/newclient/newclient.component';
import { MatStep, MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { User1Component } from './user1/user1.component';
import { LeadsComponent } from './leads/leads.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddleadsComponent } from './leads/addleads/addleads.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LoadderComponent } from './loadder/loadder.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProjectComponent,
    ClientComponent,
    NewclientComponent,
    User1Component,
    LeadsComponent,
    AddleadsComponent,
    LoadderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatStepperModule,       
    MatInputModule,         
    MatButtonModule,
    CommonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatTabsModule
    
  

    
    
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
