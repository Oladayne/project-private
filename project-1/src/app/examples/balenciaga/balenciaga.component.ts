import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/model/products';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-balenciaga',
  templateUrl: './balenciaga.component.html',
  styleUrls: ['./balenciaga.component.css']
})
export class BalenciagaComponent implements OnInit {

  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listBalenciaga : Product[] = [];
  carts:any  = this.app.getCarts() ;
  constructor(private activatedRoute : ActivatedRoute,private app:ProductService, public httpClient : HttpClient, private balenciagaService : ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.q);
      this.balenciagaService.getBalenciaga().subscribe
      (
        (data) => {
          this.listBalenciaga = data;
          console.log(data);
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }
  onBalenciaga(balenciaga:any){
  
    let idx = this.carts.findIndex((item:any)=>{
      return item.id == balenciaga.id
  });
  if(idx >= 0){
    this.carts[idx].quantity += 1
  }
  else{
    let cartItem:any ={
      id : balenciaga.id ,
      productName : balenciaga.productName ,
      image : balenciaga.image,
      // price : balenciaga.price, balenciaga.sale_price ? balenciaga.sale_price
      price : balenciaga.price,
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