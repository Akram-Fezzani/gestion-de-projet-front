import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseURL = "http://localhost:8085/Projects";

  constructor(private _http:HttpClient) { }

  AddProject(project: Project){
    return this._http.post<Project>(`${this.baseURL}/${"post"}`,project);

  }

  getProjectById(userId:string): Observable<any> {
    return this._http.get(this.baseURL + '/getProjectById/'+userId);
  }

  updateProject(project:Project,id:string):Observable<any>{
    return this._http.post(this.baseURL + '/updateProject/'+id,project);


  }
}
