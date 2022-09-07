import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  isCollapsed = true;

  task: Task =new Task();
  disableButton: boolean = false;

  constructor(private router:Router,private us:TaskService, private _router:Router) { }


  AddTask(){
    this.disableButton = true;
    this.us.AddTask(this.task).subscribe( (data:any) =>{
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
