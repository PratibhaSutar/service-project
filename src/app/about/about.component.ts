import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  products:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://fakestoreapi.com/products").subscribe((result)=>{
      console.log(result);
      this.products = result;
    },
    (error)=>{
      console.log(error);
    });
  }

}
