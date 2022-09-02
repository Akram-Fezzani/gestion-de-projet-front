import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/projectservice/project.service';


@Component({
  selector: 'app-card-update-project',
  templateUrl: './card-update-project.component.html',
})
export class CardUpdateProjectComponent implements OnInit {

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + '%';
    }

    return value;
  }




  isCollapsed = true;

  project: Project =new Project();
  disableButton: boolean = false;

  constructor(private router:Router,private ps:ProjectService, private _router:Router) { }

  updateProject(){
    this.ps.updateProject(this.project,"1").subscribe((r:any)=>{
        console.log(r);
      },(error:any) => console.log(error));
  }


  ngOnInit(): void {}


}
