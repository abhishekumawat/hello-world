import { Component } from '@angular/core';

import { Users } from '../interface/user1';
import { MainuserService } from '../services/mainuser.service';
import { User } from '../interface/user';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { group } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component {


  user1call: User;
  signupform: FormGroup;
  constructor(private user1service: MainuserService, private reactiveform: ReactiveFormsModule, private fb: FormBuilder
  ,private router:Router) {

    // this.getsignup();

    this.user1service.getuser({}).subscribe((res) => {
      this.user1call = res;
    })

    this.signupform=this.fb.group({
      contactNumber:[''],
      lastName:[''],
      firstName:[''],
      email:[''] 
     })
}

getsignup(){

  // if(this.signupform.valid){
  //   if(this.){
  //     this.user1service.edituser()
  //   }
  // }
  this.user1service.signup(this.signupform.value).subscribe(()=>{
    this.router.navigate(['/app/user1'])
    console.log(this.signupform.value);
  })
}

deleteuser(id:string){
 this.user1service.deleteuser(id).subscribe((res)=>
{

})
}

editusers(_id){
  this.user1service.edituser(this.signupform.value).subscribe((res)=>{
    
  })
}
}

