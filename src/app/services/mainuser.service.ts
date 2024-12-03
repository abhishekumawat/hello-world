import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class MainuserService {
  private userApi="https://lmsapi.propdoors.com:3000/user/list";
  private signupapi='https://lmsapi.propdoors.com:3000/user/signup';
  private editurl='https://lmsapi.propdoors.com:3000/user/update';
  private deleteurl='https://lmsapi.propdoors.com:3000/user/deleteById?id=';

  constructor(private http:HttpClient ) { }

getuser(data:any): Observable<User>{
  return this.http.post<User>(this.userApi,data);
}

signup(data:any):Observable<User>{
  return this.http.post<User>(this.signupapi,data)
}

edituser(_id:number):Observable<User>{
  return this.http.put<User>(`this.editurl+${_id}`,_id)
}


deleteuser(id:string):Observable<any>{
  const url=`${this.deleteurl}${id}`;
  return this.http.get<any>(url);
}
}
