import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-card-update-report',
  templateUrl: './card-update-report.component.html',
  styleUrls: ['./card-update-report.component.css']
})
export class CardUpdateReportComponent implements OnInit {


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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

updateReport(){
  this.rs.updateReport(this.report,"1").subscribe((r:any)=>{
      console.log(r);
    },(error:any) => console.log(error));
}
}
