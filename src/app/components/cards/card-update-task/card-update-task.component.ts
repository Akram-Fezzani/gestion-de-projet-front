import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-card-update-task',
  templateUrl: './card-update-task.component.html',
  styleUrls: ['./card-update-task.component.css']
})
export class CardUpdateTaskComponent implements OnInit {

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + '%';
    }

    return value;
  }



isCollapsed = true;

task: Task =new Task();
disableButton: boolean = false;

constructor(private router:Router,private ts:TaskService, private _router:Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

updateTask(){
  this.ts.updateTask(this.task,"1").subscribe((r:any)=>{
      console.log(r);
    },(error:any) => console.log(error));
}
}
