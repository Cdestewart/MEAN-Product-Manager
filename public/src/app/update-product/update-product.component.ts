import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  ProductInfo={name:"",quantity:0,price:0,id:"",displayPrice:""};
  id:any;
  messages={name:{message:""},price:{message:""},quantity:{message:""}};

  constructor(private _httpService:HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.singleProduct();
  }
  singleProduct(){
    this._route.params.subscribe(params => {
    this.id=params
    console.log(this.id.id)})

  let observable = this._httpService.singleProduct(this.id.id);
  observable.subscribe(data=>{console.log("DATA",data);this.ProductInfo=data[0]
  this.ProductInfo.displayPrice= "$"+this.ProductInfo.displayPrice;})  
  }
  updateProduct(displayPrice){
    console.log("DISPLAY PRICE",parseFloat(displayPrice.replace("$","")));
    
    this.ProductInfo.price = parseFloat(displayPrice.replace("$",""));

    this.ProductInfo.displayPrice = Math.floor(this.ProductInfo.price*100)/100 +"";
    if((Math.floor(this.ProductInfo.price*100)/100)% 1==0){
      this.ProductInfo.displayPrice +=".00"
    }
    else if(this.ProductInfo.price*10 % 1==0){
      this.ProductInfo.displayPrice +="0"
    }
    console.log(this.ProductInfo.displayPrice);
    this.ProductInfo.price = parseInt(this.ProductInfo.displayPrice)
    let observable = this._httpService.updateProduct(this.ProductInfo["_id"],this.ProductInfo);
    observable.subscribe(data=>{
      console.log("databack",data)
      if (data["errors"]){
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
        this.ProductInfo={name:"",quantity:0,price:0,id:"",displayPrice:""};
      
      this._router.navigate(['/product']);
      }
    })
  }
}
