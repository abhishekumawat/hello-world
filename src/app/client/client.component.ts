import { Component } from '@angular/core';
import { Client, ClientResponse } from '../interface/client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientlistService } from '../services/clientlist.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  clientuser: ClientResponse | undefined;

  // userform: FormGroup
  constructor(private clientservice: ClientlistService, private route: Router, private fb: FormBuilder) {

    this.getClient();
    this.getClient2();
    // this.userform=this.fb.group({
    //   SRNO: ["",Validators.required],
    //   client:["",Validators.required],
    //   Email:["",Validators.required],
    //   Phone:["",Validators.required],
    //   Project:["",Validators.required],
    //   Status:["",Validators.required],
    //   Action:["",Validators.required],

    // })


  }

  getClient() {
    this.clientservice.getClient({limit: 10, page:1}).subscribe((res) => {
      this.clientuser = res;
      
    })
  }

  getClient2() {
    this.clientservice.getClient({limit: 10, page:2}).subscribe((res) => {
      this.clientuser = res;
      
    })
  }
}