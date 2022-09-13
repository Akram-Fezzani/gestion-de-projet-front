import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-card-table-report',
  templateUrl: './card-table-report.component.html',
  styleUrls: ['./card-table-report.component.css']
})
export class CardTableReportComponent implements OnInit {

  reports:any;



  constructor(private rs:ReportService, private _router:Router) { }

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";


  listOfProjects(){
    this.rs.listOfReports().subscribe( (data:any) =>{
        console.log(data);
        this.reports=data;
      },
      (error:any) => console.log(error));  }


  ngOnInit(): void {

    this.listOfProjects();

  }
}
