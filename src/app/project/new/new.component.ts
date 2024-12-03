import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatStep } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Project } from 'src/app/interface/project';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
addingproject:Project|undefined

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  addprojectform:FormGroup;
constructor(private projectservice:ProjectService,private fb:FormBuilder,private router:Router)

{
this.addprojectform=this.fb.group({
  projectName:[''],
  startDate:[''],
  endDate:[''],
  totalLeadsToBeDeliverd:['']
})


}
addproject(){
  this.projectservice.addproject(this.addprojectform.value).subscribe(()=>{
    this.router.navigate(['/project'])
  })
}
}
