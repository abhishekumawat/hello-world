import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginform: FormGroup
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private userService: UserService) {
    this.loginform = this.fb.group({
      email: ["", Validators.required],
      password: ['', Validators.required]
    })
  }
  onsubmit() {
    this.loginform.valid
  }
  getnavigation() {
    this.router.navigate(['/dashboard'], { state: { data: this.loginform } })
  }

  
  giveLeads() {
    if (this.loginform.valid) {
      this.userService.getUsers(this.loginform.value).subscribe(
        () => {
          this.router.navigate(['dashboard']);
        }
      )
    }
  }
}

