import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getJson(url: string):Observable<any>{
    console.log ("el servicio anda")
    return this.http.get<any>(url);
  }

  // getJson_v2(url: string) {
  //   let headers = new Headers();    
  //   headers.append('Content-Type', 'application/json; charset=utf-8; Access-Control-Allow-Origin: *; Access-Control-Allow-Methods "GET,POST,PUT,DELETE,OPTIONS"');

  //   return this.http.get(url),    
  //   { headers: headers }
    // .map(data => data.json());
  //}



}
