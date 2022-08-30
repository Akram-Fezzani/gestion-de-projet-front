import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContributorService {


  private baseUrl = 'http://localhost:8085/contributor/'


  constructor(private http: HttpClient) { }

  getContributorByUserId(userId:number): Observable<any> {
    return this.http.get(this.baseUrl + 'getContributorByUserId/'+userId);
  }

  getnumberofcontributors(): Observable<any> {
    return this.http.get(this.baseUrl + 'numberofcontributors');
  }



  approvecontributor(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'approvecontributor/'+id);
  }


  nonapprovecontributors(): Observable<any> {
    return this.http.get(this.baseUrl + 'nonapprovecontributors');
  }

  declain(id: number) {
    console.log(id);
    return this.http.delete(this.baseUrl + 'delete/'+id);

  }
}
