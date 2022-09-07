import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-card-table-task',
  templateUrl: './card-table-task.component.html',
  styleUrls: ['./card-table-task.component.css']
})
export class CardTableTaskComponent implements OnInit {

  tasks:any;



  constructor(private ts:TaskService, private _router:Router) { }

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";


  listOfProjects(){
    this.ts.listOfTasks().subscribe( (data:any) =>{
        console.log(data);
        this.tasks=data;
      },
      (error:any) => console.log(error));  }


  ngOnInit(): void {

    this.listOfProjects();

  }
}
