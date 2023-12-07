import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'app/model/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  updateProduct(productId: number, updatedData: any) {
      throw new Error('Method not implemented.');
  }
  url = 'http://localhost:3000/Product'
  constructor(public httpClient: HttpClient,) { }
  deleteProduct(id:number){
    return this.httpClient.delete('http://localhost:3000/Product/${id}')
  }
  getDetail(params: string): Observable<any> {
    const url = 'http://localhost:3000/Product?id=' + params;
    return this.httpClient.get(url);
  }

  getSearch(params: string): Observable<any> {
    const url = 'http://localhost:3000/Product?q=' + params;
    return this.httpClient.get(url);
  }
    
  getGucci(): Observable<any> {
    const url = 'http://localhost:3000/Product?brandID=1';
    return this.httpClient.get(url);
  }

  getLV(): Observable<any> {
    const url = 'http://localhost:3000/Product?brandID=2';
    return this.httpClient.get(url);
  }

  getDior(): Observable<any> {
    const url = 'http://localhost:3000/Product?brandID=3';
    return this.httpClient.get(url);
  }

  getChanl(): Observable<any> {
    const url = 'http://localhost:3000/Product?brandID=4';
    return this.httpClient.get(url);
  }

  getBalenciaga(): Observable<any> {
    const url = 'http://localhost:3000/Product?brandID=5';
    return this.httpClient.get(url);
  }

  getChromehearts(): Observable<any> {
    const url = 'http://localhost:3000/Product?brandID=7';
    return this.httpClient.get(url);
  }

  getPrada(): Observable<any> {
    const url = 'http://localhost:3000/Product?brandID=8';
    return this.httpClient.get(url);
  }

  getDolcegabana(): Observable<any> {
    const url = 'http://localhost:3000/Product?brandID=6';
    return this.httpClient.get(url);
  }
  
  getCarts ( ) {
    let cartJson = sessionStorage.getItem('cart');
    if ( cartJson) {
      return JSON.parse(cartJson);
    }
    else{
      return [] ;
    }
  }
  saveCart(carts:any){
    let cartJson = JSON.stringify(carts);
    sessionStorage.setItem('cart',cartJson)
  } 
  getCompare ( ) {
    let comJson = sessionStorage.getItem('com');
    if ( comJson) {
      return JSON.parse(comJson);
    }
    else{
      return [] ;
    }
  }
  saveCom(compare:any){
    let comJson = JSON.stringify(compare);
    sessionStorage.setItem('com',comJson)
  } 
}
