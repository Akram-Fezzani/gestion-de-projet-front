import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-card-affect-manager',
  templateUrl: './card-affect-manager.component.html',
  styleUrls: ['./card-affect-manager.component.css']
})
export class CardAffectManagerComponent implements OnInit {
  users:any;



  constructor(private us:UserService, private _router:Router) { }
  ngOnInit(): void {
    this.getUsers();
  }
  toppings = new FormControl('');

  toppingList: string[]


  getUsers(){
    this.us.getManagers().subscribe( (data:any) =>{
        console.log(data);
        this.toppingList=data;
      },
      (error:any) => console.log(error));  }


}
