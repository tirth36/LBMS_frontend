import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  apiURL = 'http://localhost:4000/user';

  //get all data
  getalldata():Observable<any>
  {
    return this.http.get(this.apiURL);
  }

  createdata(data:any):Observable<any>
  {
    console.log(data,'created');
    return this.http.post(`${this.apiURL}`,data);
  }

  //delete data
  deletedata(id:any):Observable<any>
  {
    let ids=id;
    return this.http.delete(`${this.apiURL}/${ids}`)
  }

  updatedata(data:any,id:any):Observable<any>
  {
    return this.http.put(`${this.apiURL}/${id}`,data);
  }

  //getsingledata
  getsingledata(id:any):Observable<any>
  {
    return this.http.get(`${this.apiURL}/${id}`); 
  }
}
