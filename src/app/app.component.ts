import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  Inject
} from '@angular/core';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import {User} from "./models/User";
import {UserService} from "./services/user/user.service";
import { TokenStorageService } from './services/tokenstorageservice/token-storage.service';
import { AuthService } from './services/authservice/auth.service';
import { ContributorService } from './services/contributor/contributor.service';
import { Contributor } from './models/Contributor';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})


export class AppComponent implements OnInit {
  public static instance: AppComponent;
  currentUser!: any;
  gettingUser: boolean = true;
  constructor(
    private contributorService: ContributorService,
    private authService: AuthService,
    private ts:TokenStorageService,
    private userService:UserService,
    private renderer: Renderer2,
    public location: Location,
    @Inject(DOCUMENT) document: any
  ) {
    AppComponent.instance = this;
  }
  getCurrentUser(): User {
    return this.currentUser;
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e:any) {
    let element;
    if (window.pageYOffset > 100) {
      element = document.getElementById('navbar-top');
      if (element) {
        element.classList.remove('navbar-transparent');
        element.classList.add('bg-danger');
      }
    } else {
      element = document.getElementById('navbar-top');
      if (element) {
        element.classList.add('navbar-transparent');
        element.classList.remove('bg-danger');
      }
    }
  }
  setCurrentUser(user:User){
    this.currentUser = user;

    this.contributorService.getContributorByUserId(this.currentUser.id).subscribe((r:Contributor) => {
      this.currentUser.contributorAccount = r;
    },error => {console.log(error)});

  }
  ngOnInit() {
    this.gettingUser = true;
    if(this.ts.getId()==null) {
      this.gettingUser = false;
    } else {
    this.authService.getcurrentuser(this.ts.getId()+"").subscribe((data:any) =>{
    this.setCurrentUser(data);
    this.gettingUser = false;
    },
    (error:any) => {
      this.gettingUser = false;
    })

  }
    this.onWindowScroll(event);
  }



}
