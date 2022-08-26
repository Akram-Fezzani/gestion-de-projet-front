import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/User";
import { RegisterService } from "src/app/services/registerservice/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  isCollapsed = true;
  focus!:any;
  focus1!:any;
  focus2!:any;
  user: User=new User();
  disableButton: boolean = false;

  constructor(private router:Router,private us:RegisterService, private _router:Router) { }


  AddUser(){
    this.disableButton = true;
    this.us.AddUser(this.user).subscribe( (data:any) =>{
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






  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }
}
