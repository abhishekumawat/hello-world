import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Project,} from '../interface/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectUrl ='https://lmsapi.propdoors.com:3000/project/list';
  // private allprojecturl='https://lmsapi.propdoors.com:3000/project/list/allProjects';
  private addprojecturl='https://lmsapi.propdoors.com:3000/project';

  constructor( private http:HttpClient) { }

  getproject(data:any):Observable<Project>{
    return this.http.post<Project>(this.projectUrl,data)
    
  }

addproject(data):Observable<Project>{
  return this.http.post<Project>(this.addprojecturl,data)
}

}
