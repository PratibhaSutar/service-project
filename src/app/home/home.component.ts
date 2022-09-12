import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
users:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {


    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe
    ((result)=>{
   this.users = result;
      console.log(result);
    },(error)=>{
console.log(error);
    }
    );
  }

}
