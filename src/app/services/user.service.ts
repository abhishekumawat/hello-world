import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Token } from '@angular/compiler';
import { ProjectComponent } from '../project/project.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://lmsapi.propdoors.com:3000/user/login';
  private projectUrl ='https://lmsapi.propdoors.com:3000/project/list';
 
 

  constructor(private http:HttpClient,private fb:FormBuilder,private router:Router) {
  

  }
  getUsers(data:any):Observable<any>{
  return this.http.post(this.apiUrl,data).pipe(
    tap((res) => {
      const token=res.token;
      sessionStorage.setItem('token',token);
    })
  )

  
  };

  postproject(data:any):Observable<any>{
    return this.http.post(this.projectUrl,data)
    
  }

 
  }