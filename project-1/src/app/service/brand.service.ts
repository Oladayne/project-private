import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient : HttpClient) { }

  getBrands(): Observable<any>
  {
	  var url : string = "http://localhost:3000/Brands";
    return this.httpClient.get(url);
  }
}
