import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/products';
import { ProducttService } from '../../service/productt.service';

@Component({
  selector: 'app-themsuaxoa',
  templateUrl: './themsuaxoa.component.html',
  styleUrls: ['./themsuaxoa.component.css']
})
export class ThemsuaxoaComponent implements OnInit {
product: Product[];
constructor( private ProducttService: ProducttService) {
    this.product = [];
 }

  ngOnInit(): void {
    this. getallproduct();
  }
  getallproduct(){
    return this.ProducttService.getallproduct().subscribe(data => console.log(data))
  }

}
