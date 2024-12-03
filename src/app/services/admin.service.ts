import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectSummary } from '../interface/admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

adminurl:'https://lmsapi.propdoors.com:3000/dashboard/admin';
  constructor(private http:HttpClient) { }
 
createdb(data:any):Observable<ProjectSummary>{
  return this.http.post<ProjectSummary>(this.adminurl,data)
}
}
