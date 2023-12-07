import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProducttService {

  constructor(
    private httpClient: HttpClient
    ){ }
    API_URL = "http://localhost:3000/Product"
    getallproduct(){
        return this.httpClient.get('${this.API_URl}') 
    }
}
