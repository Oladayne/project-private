import { HttpClient } from '@angular/common/http';
import { Component, Input,ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/model/products';
import { ProductService } from 'app/service/product.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  index = ["id", "productName", "brandID", "Gender", "image", "content", "rating", "origin", "price", "status"];
  listSearch : Product[] = [];
  carts:any  = this.app.getCarts() ;
  form = new FormGroup({
    searchKey: new FormControl()
})

  constructor(private activatedRoute : ActivatedRoute,private app:ProductService, public httpClient : HttpClient, private searchService : ProductService,public location: Location, private element : ElementRef, private router : Router) { }
  @Input() id!: number | string;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params.q);
      this.searchService.getSearch(params.q).subscribe
      (
        (data) => {
          this.listSearch = data;
        },
        (error) => {
            console.log(error);
        }
      )
    })
  }
  deleteProduct(id:number){
    // this.searchService.deleteProduct(id).subscribe(data =>{
    //   alert("xoa thanh cong")
    // })

    console.log(id);
  }
  kicktovalue() {
    this.router.navigateByUrl('/search?q=' + this.form.value.searchKey);
}
onSearch(search:any){
  
  let idx = this.carts.findIndex((item:any)=>{
    return item.id == search.id
});
if(idx >= 0){
  this.carts[idx].quantity += 1
}
else{
  let cartItem:any ={
    id : search.id ,
    productName : search.productName ,
    image : search.image,
    // price : search.price, search.sale_price ? search.sale_price
    price : search.price,
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
