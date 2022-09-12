import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  showdata(name: string): string {
    return name;

  }

  square(num: number): number {
    return num * num;
  }

  //getapicall(url:String){
 // return  this.http.get(url);
  //}


}
