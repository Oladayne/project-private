import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/model/products';
import { ProductService } from 'app/service/product.service';
import { Detail } from 'app/model/details';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listDetail : Product[] = [];
  listProduct : Product[] = [];
  carts:any  = this.app.getCarts() ;
  compare:any  = this.app.getCompare() ;
  constructor(private activatedRoute : ActivatedRoute, public httpClient : HttpClient, private detailService : ProductService, private app:ProductService,private productService : ProductService ) { }

  ngOnInit(): void { 
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.id);
      this.detailService.getDetail(params.id).subscribe
      (
        (data) => {
          this.listDetail = data;
          console.log(data);
        },
        (error) => {
            console.log(error);
        }
      )
    })
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.id);
      this.productService.getDetail(params.id).subscribe
      (
        (data) => {
          this.listProduct = data;
          console.log(data);
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }
  onAddToCart(detail:any){
  
    let idx = this.carts.findIndex((item:any)=>{
      return item.id == detail.id
  });
  if(idx >= 0){
    this.carts[idx].quantity += 1
  }
  else{
    let cartItem:any ={
      id : detail.id ,
      productName : detail.productName ,
      image : detail.image,
      // price : detail.price, detail.sale_price ? detail.sale_price
      price : detail.price,
      quantity:1,
      subtotal: function(){
        return this.price * this.quantity
      }
      }
      this.carts.push(cartItem)
  }  
   this.app.saveCart(this.carts);
  }
  onCompare(product:any){

    let idx = this.compare.findIndex((item:any)=>{
      return item.id == product.id
  });
  if(idx >= 0){
    this.compare[idx].quantity += 1
  }
  else{
    let  comItem:any ={
      id : product.id ,
      productName : product.productName ,
      image : product.image,
      content: product.content,
      price : product.price,
      }
      this.compare.push(comItem)
  }  
   this.app.saveCom(this.compare);
  }
  
}