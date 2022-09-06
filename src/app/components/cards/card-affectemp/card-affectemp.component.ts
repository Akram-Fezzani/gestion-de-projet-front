import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-card-affectemp',
  templateUrl: './card-affectemp.component.html',
  styleUrls: ['./card-affectemp.component.css']
})
export class CardAffectempComponent implements OnInit {

  users:any;



  constructor(private us:UserService, private _router:Router) { }
  ngOnInit(): void {
    this.getUsers();
  }
  toppings = new FormControl('');

  toppingList: string[]


  getUsers(){
    this.us.getUsers().subscribe( (data:any) =>{
        console.log(data);
        this.toppingList=data;
      },
      (error:any) => console.log(error));  }


}

