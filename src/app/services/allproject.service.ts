import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectData2 } from '../interface/allproject';


@Injectable({
  providedIn: 'root'
})
export class AllprojectService {

  private allprojecturl='https://lmsapi.propdoors.com:3000/project/list/allProjects';
  constructor(private http:HttpClient ) { }

  addingleads():Observable<ProjectData2>{
    return this.http.get<ProjectData2>(this.allprojecturl)
   
   }
  }
