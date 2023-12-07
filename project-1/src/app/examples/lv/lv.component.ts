import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/model/products';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-lv',
  templateUrl: './lv.component.html',
  styleUrls: ['./lv.component.css']
})
export class LVComponent implements OnInit {
  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listLv : Product[] = [];
  carts:any  = this.app.getCarts() ;
  constructor(private activatedRoute : ActivatedRoute,private app:ProductService, public httpClient : HttpClient, private lvService : ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.q);
      this.lvService.getLV().subscribe
      (
        (data) => {
          this.listLv = data;
          console.log(data);
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }
  onLV(lv:any){
  
    let idx = this.carts.findIndex((item:any)=>{
      return item.id == lv.id
  });
  if(idx >= 0){
    this.carts[idx].quantity += 1
  }
  else{
    let cartItem:any ={
      id : lv.id ,
      productName : lv.productName ,
      image : lv.image,
      // price : lv.price, lv.sale_price ? lv.sale_price
      price : lv.price,
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
