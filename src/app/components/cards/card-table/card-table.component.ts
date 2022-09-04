import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ProjectService } from "src/app/services/projectservice/project.service";

@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
  projects:any;



  constructor(private ps:ProjectService, private _router:Router) { }

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";


  listOfProjects(){
    this.ps.listOfProjects().subscribe( (data:any) =>{
        console.log(data);
        this.projects=data;
      },
      (error:any) => console.log(error));  }


  ngOnInit(): void {

    this.listOfProjects();

  }
}
