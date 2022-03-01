import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  endPoint = "http://tic.idevasas.com/api/v1/";

  constructor(private http: HttpClient) { 
  }

  httpOptions ={
    headers: new HttpHeaders({
      "Content-Type":"application/json",
    }),
  };

  generateConsult(operation:any): Observable<any>{
    return this.http.get(this.endPoint + operation)
  }

  generateCreate(operation:any, objRequest:any): Observable<any>{
    return this.http.post<any>(
      this.endPoint + operation,
      objRequest,
      this.httpOptions
    );
  }
}
