import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/model/products';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-chromehearts',
  templateUrl: './chromehearts.component.html',
  styleUrls: ['./chromehearts.component.css']
})
export class ChromeheartsComponent implements OnInit {
  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listChromehearts : Product[] = [];
  carts:any  = this.app.getCarts() ;
  constructor(private activatedRoute : ActivatedRoute,private app:ProductService, public httpClient : HttpClient, private chromeheartService : ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.q);
      this.chromeheartService.getChromehearts().subscribe
      (
        (data) => {
          this.listChromehearts = data;
          console.log(data);
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }
  onCH(chromehearts:any){
  
    let idx = this.carts.findIndex((item:any)=>{
      return item.id == chromehearts.id
  });
  if(idx >= 0){
    this.carts[idx].quantity += 1
  }
  else{
    let cartItem:any ={
      id : chromehearts.id ,
      productName : chromehearts.productName ,
      image : chromehearts.image,
      // price : chromehearts.price, chromehearts.sale_price ? chromehearts.sale_price
      price : chromehearts.price,
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
