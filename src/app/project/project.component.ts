import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project, ProjectData } from '../interface/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projectUser: Project | undefined;
  constructor(private projectService: ProjectService) {
    this.projectService.getproject({ limit: 10, page: 1 }).subscribe((res) => {
      this.projectUser = res;
    })
  }

}