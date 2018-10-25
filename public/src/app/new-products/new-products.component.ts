import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {
  ProductInfo:any;
  messages={name:{message:""},price:{message:""},quantity:{message:""}};
  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router) { }
  
  ngOnInit() {
    this.ProductInfo = {name:""}
    this.messages={name:{message:""},price:{message:""},quantity:{message:""}};
  }
  addProduct(){
    this.messages={name:{message:""},price:{message:""},quantity:{message:""}};
    var id = Math.floor((Math.random() * 100000000000000) + 10000000000000);
    console.log(id);
    this.ProductInfo.id = id;
    this.ProductInfo.displayPrice = Math.floor(this.ProductInfo.price*100)/100;
    if((Math.floor(this.ProductInfo.price*100)/100)% 1==0){
      this.ProductInfo.displayPrice +=".00"
    }
    else if(this.ProductInfo.price*10 % 1==0){
      this.ProductInfo.displayPrice +="0"
    }
    let observable = this._httpService.addProduct(this.ProductInfo);
    observable.subscribe(data=>{
      console.log("WRONG Product ",data)
      if (data["errors"]){
        if(data["errors"]["id"]){
          this.addProduct();
        }
        if(data["errors"]["name"]){
          this.messages.name=data["errors"].name;  

        }
        if (data["errors"]["price"]){
          this.messages.price=data["errors"].price;  
        }
        if (data["errors"]["quantity"]){
          this.messages.quantity=data["errors"].quantity;  
        }
      }
      else{
        this.ProductInfo ={name:""};
        
      this._router.navigate(['/product']);
      }
      
    })
    
  }

}
