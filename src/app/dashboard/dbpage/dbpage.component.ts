import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProjectSummary } from 'src/app/interface/admin';
// import { AdminService } from 'src/app/services/admin.service';
import { AdminnService } from 'src/app/services/adminn.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-dbpage',
  templateUrl: './dbpage.component.html',
  styleUrls: ['./dbpage.component.css']
})
export class DbpageComponent {

  adminvar: ProjectSummary | undefined;
  constructor(private route: Router, private userService: UserService, private admin:AdminnService) {
 
 this.admin.dashbd({type: "All"}).subscribe((res)=>{
  this.adminvar=res;
 })
  }
}

