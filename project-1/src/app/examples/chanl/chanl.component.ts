import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/model/products';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-chanl',
  templateUrl: './chanl.component.html',
  styleUrls: ['./chanl.component.css']
})
export class ChanlComponent implements OnInit {

  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listChanel : Product[] = [];
  carts:any  = this.app.getCarts() ;
  constructor(private activatedRoute : ActivatedRoute,private app:ProductService, public httpClient : HttpClient, private ChanelService : ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.q);
      this.ChanelService.getChanl().subscribe
      (
        (data) => {
          this.listChanel = data;
          console.log(data);
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }
  onChanl(chanl:any){
  
    let idx = this.carts.findIndex((item:any)=>{
      return item.id == chanl.id
  });
  if(idx >= 0){
    this.carts[idx].quantity += 1
  }
  else{
    let cartItem:any ={
      id : chanl.id ,
      productName : chanl.productName ,
      image : chanl.image,
      // price : chanl.price, chanl.sale_price ? chanl.sale_price
      price : chanl.price,
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