import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURL = "http://localhost:8085/Tasks";

  constructor(private _http:HttpClient) { }

  AddTask(task: Task){
    return this._http.post<Task>(`${this.baseURL}/${"post"}`,task);

  }

  getTaskById(taskId:string): Observable<any> {
    return this._http.get(this.baseURL + '/getTaskById/'+taskId);
  }

  updateTask(task:Task,id:string):Observable<any>{
    return this._http.post(this.baseURL + '/updateTask/'+id,task);


  }

  listOfTasks(): Observable<any> {
    return this._http.get(this.baseURL + '/getAllTasks');
  }
}
