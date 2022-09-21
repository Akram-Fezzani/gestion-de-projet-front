import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contributor } from '../models/Contributor';
import { UpgradeService } from '../services/upgradesevice/upgrade.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {


  contributor: Contributor=new Contributor();

  constructor(private us:UpgradeService, private _router:Router) { }



  AddContributor(){
    this.us.AddContributor(this.contributor).subscribe( (data:any) =>{
        console.log(data);

      },
      (error:any) => console.log(error));  }






  ngOnInit(): void {
  }

}
