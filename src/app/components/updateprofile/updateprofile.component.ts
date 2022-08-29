import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';
@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent implements OnInit {
  user!: User;
  constructor(private as:AuthService, private router: Router,private ts:TokenStorageService) { }

  ngOnInit(): void {
    this.user={...AppComponent.instance.getCurrentUser()};
    console.log(this.user);
  }
  updateuser(){
    const id=this.ts.getId()+"";
    console.log(id);
    this.as.updateuser(this.user,id).subscribe((r:any)=>{
        console.log(r);
      },(error:any) => console.log(error));
  }
}
