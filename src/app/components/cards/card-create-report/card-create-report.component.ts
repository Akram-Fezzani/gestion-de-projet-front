import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-card-create-report',
  templateUrl: './card-create-report.component.html',
  styleUrls: ['./card-create-report.component.css']
})
export class CardCreateReportComponent implements OnInit {


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + '%';
    }

    return value;
  }



isCollapsed = true;

  report: Report =new Report();
  disableButton: boolean = false;

  constructor(private router:Router,private rs:ReportService, private _router:Router) { }


  AddReport(){
    this.disableButton = true;
    this.rs.AddReport(this.report).subscribe( (data:any) =>{
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
