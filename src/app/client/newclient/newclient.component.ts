import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectData2 } from 'src/app/interface/allproject';
import { ProjectDat } from 'src/app/interface/newclient';
import { ProjectData } from 'src/app/interface/project';
import { User } from 'src/app/interface/user';
import { AllprojectService } from 'src/app/services/allproject.service';
import { ClientlistService } from 'src/app/services/clientlist.service';
import { NewclientlistService } from 'src/app/services/newclientlist.service';


@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent {

// newclientuser:User|undefined;
newclientuser:ProjectDat|undefined;
addingclientform:FormGroup;
addingprojectname:ProjectData2|undefined;
  constructor(private newclientservice:NewclientlistService , private fb:FormBuilder,private router:Router , private clientservice:ClientlistService , private projectservice:AllprojectService){

    this.newclientservice.getnewclient({limit:10,page:1}).subscribe((res)=>{
      this.newclientuser=res;
    })
this.addingclientform=this.fb.group({
  name:[''],
  email:[''],
  contactNumber:[''],
  clientStatus:[''],
  project:['']

})
this.callingproject();

  
  }



  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  addingclient(){
    this.clientservice.addnewclient(this.addingclientform.value).subscribe(()=>{
      this.router.navigate(['/client'])
    })
  }
 
callingproject(){
  this.projectservice.addingleads().subscribe((res)=>{
    this.addingprojectname=res;
  })
}

}



