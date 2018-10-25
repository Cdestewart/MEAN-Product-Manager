import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  params:any;
  ProductInfo={name:"",price:0,quantity: 0,id:"", displayPrice:""};
  constructor(private _httpService: HttpService, private _route:ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.singleProduct();
  }
  singleProduct(){
    this._route.params.subscribe(params => this.params=params);
    console.log(this.params.id);
    let observer = this._httpService.singleProduct(this.params.id);
    observer.subscribe(data=>{console.log(data[0]);this.ProductInfo=data[0]
      
      
    });
  }
  deleteProduct(){
    console.log("delete")
    let observable = this._httpService.deleteProduct(this.ProductInfo["id"]);
    observable.subscribe(data=>console.log("delete product"))
    this._router.navigate(['/product']);
  }
}
