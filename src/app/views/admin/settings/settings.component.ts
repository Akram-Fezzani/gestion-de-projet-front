import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Project } from "src/app/models/project";
import { ProjectService } from "src/app/services/projectservice/project.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {
  isCollapsed = true;

  project: Project =new Project();
  disableButton: boolean = false;

  constructor(private router:Router,private us:ProjectService, private _router:Router) { }


  AddProject(){
    this.disableButton = true;
    this.us.AddProject(this.project).subscribe( (data:any) =>{
      console.log(data);
        if(data.message == "success") {
          this.disableButton = false;
          this.router.navigate(['/login'])
      .then(() => {
        window.location.reload();
      });
        }
      },
      (error:any) => console.log(error));  }






  ngOnInit(): void {}



}
