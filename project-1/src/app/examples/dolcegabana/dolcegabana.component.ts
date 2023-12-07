import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/model/products';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-dolcegabana',
  templateUrl: './dolcegabana.component.html',
  styleUrls: ['./dolcegabana.component.css']
})
export class DolcegabanaComponent implements OnInit {
  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listDolcegabbana : Product[] = [];
  carts:any  = this.app.getCarts() ;
  constructor(private activatedRoute : ActivatedRoute,private app:ProductService, public httpClient : HttpClient, private dolcegabbanaService : ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.q);
      this.dolcegabbanaService.getDolcegabana().subscribe
      (
        (data) => {
          this.listDolcegabbana = data;
          console.log(data);
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }
  onDG(dg:any){
  
    let idx = this.carts.findIndex((item:any)=>{
      return item.id == dg.id
  });
  if(idx >= 0){
    this.carts[idx].quantity += 1
  }
  else{
    let cartItem:any ={
      id : dg.id ,
      productName : dg.productName ,
      image : dg.image,
      // price : dg.price, dg.sale_price ? dg.sale_price
      price : dg.price,
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
