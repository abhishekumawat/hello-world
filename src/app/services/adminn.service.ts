import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectSummary } from '../interface/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminnService {
  adminApi='https://lmsapi.propdoors.com:3000/dashboard/admin';

  constructor(private http:HttpClient) { }
  dashbd(data:any):Observable<ProjectSummary>{
    return this.http.post<ProjectSummary>(this.adminApi,data)
  }
}
  
