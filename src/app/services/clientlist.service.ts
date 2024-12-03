import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientResponse } from '../interface/client';
import { ProjectData } from '../interface/project';
import { HttpSentEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientlistService {

  constructor(private http: HttpClient) { }

  private clientApi = 'https://lmsapi.propdoors.com:3000/client/list';
  private clienturl='https://lmsapi.propdoors.com:3000/client'
  

  getClient(data:any): Observable<ClientResponse>{
    return this.http.post<ClientResponse>(this.clientApi, data);
  }

addnewclient(data:any):Observable<ClientResponse>{
  return this.http.post<ClientResponse>(this.clienturl,data)
}

}
