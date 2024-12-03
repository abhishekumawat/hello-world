import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { ProjectData2 } from 'src/app/interface/allproject';
import { leads } from 'src/app/interface/leads';
import { AllprojectService } from 'src/app/services/allproject.service';
import { LeadsService } from 'src/app/services/leads.service';
// import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-addleads',
  templateUrl: './addleads.component.html',
  styleUrls: ['./addleads.component.css']
})
export class AddleadsComponent {

projectuser:ProjectData2|undefined;
leadinterface:leads|undefined;
addleadform:FormGroup;
isloading=true;
  constructor(private leadservice:LeadsService,private fb:FormBuilder,private router:Router,private projectservice:AllprojectService){
    this.addleadform=this.fb.group({
      name:[''],
      email:[''],
      contactnumber:[''],
      budget:[''],

    })
    this.getprojectlist();
    // this.addleadlist();
    this.addleads();

  }

  
addleads(){
  this.leadservice.getleadlist(this.addleadform.value).subscribe(()=>{
    this.router.navigate(['/leads'])
  })
}

getprojectlist(){
  this.projectservice.addingleads().subscribe((res: any)=>{
    this.projectuser = res;
  })
}

// addleadlist(){
//   this.leadservice.getleads().subscribe((res)=>{
//     this.leadinterface=res;
//   })
// }
}
  