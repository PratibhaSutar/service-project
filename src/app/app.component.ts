import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = "";
  square = 0;
  products: any;

  constructor(private common: MyserviceService,
    private common1:MyserviceService,
    private http: HttpClient) {

  }
  ngOnInit(): void {
    this.name = this.common.showdata("pratibha");

    this.square = this.common1.square(10);

    this.http.get("https://fakestoreapi.com/products").subscribe
      ((response:any) => {
        this.products = response;
        console.log(response);
      },
        (error:any) => {
          console.log(error);
        }
      );


  }
  title = 'service-project';


}
