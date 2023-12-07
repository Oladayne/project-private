import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/model/products';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-dior',
  templateUrl: './dior.component.html',
  styleUrls: ['./dior.component.css']
})
export class DiorComponent implements OnInit {
  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listDior : Product[] = [];
  carts:any  = this.app.getCarts() ;
  constructor(private activatedRoute : ActivatedRoute,private app:ProductService, public httpClient : HttpClient, private diorService : ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.q);
      this.diorService.getDior().subscribe
      (
        (data) => {
          this.listDior = data;
          console.log(data);
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }
  ondior(dior:any){
  
    let idx = this.carts.findIndex((item:any)=>{
      return item.id == dior.id
  });
  if(idx >= 0){
    this.carts[idx].quantity += 1
  }
  else{
    let cartItem:any ={
      id : dior.id ,
      productName : dior.productName ,
      image : dior.image,
      // price : dior.price, dior.sale_price ? dior.sale_price
      price : dior.price,
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
