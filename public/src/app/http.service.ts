import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addProduct(productInfo){
    return this._http.post('/api/product',productInfo)
  }
  showAll(){
    return this._http.get('/api/product')
  }
  singleProduct(id){
    console.log("EDIT HTTP SERVICE /product/",id)
    return this._http.get('/api/product/'+id)
  }
  updateProduct(id,productInfo){
    console.log(productInfo)
    return this._http.put('/api/product/'+id,productInfo);
  }

  deleteProduct(id){
    console.log("DELTE product",id)
    return this._http.delete('/api/product/'+id);
  }

}
