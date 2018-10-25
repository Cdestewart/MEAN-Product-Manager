import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:"",pathMatch: "full", redirectTo:"/products"},
  {path:"products",component:AllProductsComponent},
  {path:"products/new",component:NewProductsComponent},
  {path:"products/:id/edit",component:UpdateProductComponent},
  {path:"products/:id",component:SingleProductComponent},
  {path:'**',redirectTo:"/products"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
