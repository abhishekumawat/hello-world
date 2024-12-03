import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { LeadsService } from '../services/leads.service';
import { leads } from '../interface/leads';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '../services/project.service';
import { Project } from '../interface/project';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LeadsComponent {

  showFiller = false;

  isloading: boolean
  getleadsdata: leads | undefined;
  projectUser: Project | undefined;
  leadspayload = {
    projects: [],
    clientStatus: [],
    limit: 10,
    verifiedOn: "",
    page: 1
  }
  
  constructor(private leadservice: LeadsService, private projectservice: ProjectService) {

   this.getlead()
   this.getallproject()
    
  }

  filter(data: any) {
    this.leadspayload.clientStatus = data;
  }

getlead(){
  this.isloading=true;
  this.leadservice.getleads(this.leadspayload).subscribe((res) => {
    this.getleadsdata = res;
this.isloading=false;
  })
}
getallproject(){
  this.projectservice.getproject({}).subscribe((res) => {
    this.projectUser = res;
  })
}
}

