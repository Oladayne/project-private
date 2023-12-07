import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  compare : any = [];
  constructor(private app : ProductService) { }

  ngOnInit(): void {
    this.compare = this.app.getCompare();
  } cart
  subtotal(com: any){
    return com.quantity* com.price;

  }
  upQuantity(idx:number, ev:any){
    let newQuantity  = parseInt( ev.target.value);
    newQuantity = newQuantity > 0 ? newQuantity : 0 ;
    ev.target.value = newQuantity;
    this.compare[idx].quantity = ev.target.value
    console.log (ev.target.value)
    this.app.saveCom(this.compare);
  }
  tangSL(idx:number, qtt:any, ){
    let newQuantity = parseInt(qtt) + 1 ;
    newQuantity = newQuantity <= 100 ? newQuantity : 100 ;
    this.compare[idx].quantity = newQuantity
    this.app.saveCom(this.compare);
  }
  giamSL(idx:number, qtt:any, ){
    let newQuantity = parseInt(qtt) - 1 ;
    newQuantity =newQuantity > 0 ? newQuantity : 1;
    this.compare[idx].quantity = newQuantity
    this.app.saveCom(this.compare);
  }
  removecom(idx:number, ){
    //  this.carts.splice(idx,1);
    //  this.app.saveCart(this.carts);
    if (confirm('are you want')){
      this.compare.splice(idx,1);
      this.app.saveCom(this.compare);
    }
  }
  
  onclearcom(){
    
    sessionStorage.clear()
      // if (confirm('xoa het')){
      //  sessionStorage.clear()
      // }
  }
}
