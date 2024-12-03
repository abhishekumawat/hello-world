import { HttpClient } from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { leads } from '../interface/leads';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  private leadapi='https://lmsapi.propdoors.com:3000/lead/list';
  private leadurl='https://lmsapi.propdoors.com:3000/lead';
  constructor(private http:HttpClient) { }


  getleads(data:any):Observable<leads>{
    return this.http.post<leads>(this.leadapi,data)

  }

getleadlist(dat:any):Observable<leads>{
  return this.http.post<leads>(this.leadurl,dat)

}
}
