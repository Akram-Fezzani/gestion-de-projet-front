import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient ) { }



}
