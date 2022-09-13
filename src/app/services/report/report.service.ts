import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from 'src/app/models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseURL = "http://localhost:8085/Report";

  constructor(private _http:HttpClient) { }

  AddReport(report: Report){
    return this._http.post<Report>(`${this.baseURL}/${"post"}`,report);

  }

  getReportById(reportId:string): Observable<any> {
    return this._http.get(this.baseURL + '/getTaskById/'+reportId);
  }

  updateReport(report:Report,id:string):Observable<any>{
    return this._http.post(this.baseURL + '/updateTask/'+id,report);


  }

  listOfReports(): Observable<any> {
    return this._http.get(this.baseURL + '/getReports');
  }
}
