import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/model/products';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-gucci',
  templateUrl: './gucci.component.html',
  styleUrls: ['./gucci.component.css']
})
export class GucciComponent implements OnInit {
  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listGucci : Product[] = [];
  carts:any  = this.app.getCarts() ;
  constructor(private activatedRoute : ActivatedRoute,private app:ProductService, public httpClient : HttpClient, private gucciService : ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.q);
      this.gucciService.getGucci().subscribe
      (
        (data) => {
          this.listGucci = data;
          console.log(data);
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }
  onGucci(gucci:any){
  
    let idx = this.carts.findIndex((item:any)=>{
      return item.id == gucci.id
  });
  if(idx >= 0){
    this.carts[idx].quantity += 1
  }
  else{
    let cartItem:any ={
      id : gucci.id ,
      productName : gucci.productName ,
      image : gucci.image,
      // price : gucci.price, gucci.sale_price ? gucci.sale_price
      price : gucci.price,
      quantity:1,
      subtotal: function(){
        return this.price * this.quantity
      }
      }
      this.carts.push(cartItem)
  }  
   this.app.saveCart(this.carts);
  }

}
