import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent implements OnInit {
  nbrUsers!:number;
  nbrActiveUsers!:number;

  constructor(private us:UserService, private _router:Router) { }


  getnumberofusers(){
    this.us.getnumberofusers().subscribe( (data:any) =>{
      this.nbrUsers = data;
      },
      (error:any) => console.log(error));  }



  getnumberofactiveusers(){
    this.us.getnumberofactiveusers().subscribe( (data:any) =>{
      this.nbrActiveUsers = data;
       },
      (error:any) => console.log(error));  }

  ngOnInit(): void {}
}
