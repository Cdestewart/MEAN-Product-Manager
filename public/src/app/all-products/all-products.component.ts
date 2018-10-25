import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  ProductInfo: any;
  constructor(private _httpService: HttpService) { }
  
  ngOnInit() {
    this.showAll()
  }
  showAll(){
    console.log("SHOW all HOME COMPONENT")
    let observer = this._httpService.showAll();
    observer.subscribe(data=>{console.log(data);this.ProductInfo=data});
  }

}
