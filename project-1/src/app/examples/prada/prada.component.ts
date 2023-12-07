import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/model/products';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-prada',
  templateUrl: './prada.component.html',
  styleUrls: ['./prada.component.css']
})
export class PradaComponent implements OnInit {
  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listPrada : Product[] = [];
  carts:any  = this.app.getCarts() ;
  constructor(private activatedRoute : ActivatedRoute,private app:ProductService, public httpClient : HttpClient, private pradaService : ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.q);
      this.pradaService.getPrada().subscribe
      (
        (data) => {
          this.listPrada = data;
          console.log(data);
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }
  onPrada(prada:any){
  
    let idx = this.carts.findIndex((item:any)=>{
      return item.id == prada.id
  });
  if(idx >= 0){
    this.carts[idx].quantity += 1
  }
  else{
    let cartItem:any ={
      id : prada.id ,
      productName : prada.productName ,
      image : prada.image,
      // price : prada.price, prada.sale_price ? prada.sale_price
      price : prada.price,
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
