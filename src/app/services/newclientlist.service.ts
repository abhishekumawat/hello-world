import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ProjectData } from '../interface/project';
import { Observable } from 'rxjs';
import { ProjectDat } from '../interface/newclient';
// import { ProjectData } from '../interface/newclient';

@Injectable({
  providedIn: 'root'
})
export class NewclientlistService {

  constructor(private http:HttpClient) {}

  private newclientApi='https://lmsapi.propdoors.com:3000/project/list/allProjects'

  getnewclient(dat:any): Observable<ProjectDat>{
    return this.http.get<ProjectDat>(this.newclientApi);

  }
}


