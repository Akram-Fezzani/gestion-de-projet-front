import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { AuthLoginInfo } from 'src/app/models/login-info';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any={};
  currentUser!: User;
  isLoginFailed =false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router,private ts:TokenStorageService) { }

login(){
    this.authService.login(new AuthLoginInfo(this.form.username, this.form.password))
    .subscribe(

(data:any) =>{
  this.isLoginFailed = false;
  const id=this.ts.getId()+"";
this.authService.getcurrentuser(id).subscribe((data:any) =>{
    this.currentUser = data;
AppComponent.instance.setCurrentUser(this.currentUser)
  this.router.navigate(['/']);
},
(error:any) => {
  this.isLoginFailed = true;
}
    )

},
(error:any) => {
  this.errorMessage = error.error.message;
  this.isLoginFailed = true;
}
    )

}


getcurrentuser(){
const id=this.ts.getId()+"";
this.authService.getcurrentuser(id,).subscribe((r:any)=>{
  console.log(r);
},(error:any) => console.log(error));

}

  ngOnInit(): void {
  }



}
