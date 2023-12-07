import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Category } from '../../common/category';
import { Product } from '../../model/products';
import { ProductService } from 'app/service/product.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
url='http://localhost:3000/Product';
category:Category;
product:Product;
id: any;
updatedData: any;
app: any = [];

  constructor(private httpClient: HttpClient, private ProductService : ProductService,) {
    this.category = new Category();

    this.product = new Product();

   }
   deleteData(id:string): Observable<any> {
    const url = `http://localhost:3000/Product/${id}`;
    return this.httpClient.delete(url);
  }
  updateProduct( updatedData: any,_product:Product): Observable<any> {
    const url = `http://localhost:3000/Product/${updatedData}`;
    return this.httpClient.put(url, updatedData);
  }
  
  ngOnInit(): void {
  }
  save(){
    this.httpClient.post(this.url, this.category).subscribe(data=>{
        console.log(data);
    });
  }

  x
onDelete(): void {
    if (this.id) {
      this.deleteData(this.id).subscribe(
        () => {
          console.log('Xóa dữ liệu thành công');
          window.location.reload();
          // Thực hiện các hành động khác sau khi xóa dữ liệu thành công
        },
        (error) => {
          console.error('Lỗi xóa dữ liệu:', error);
        }
      );
    } else {
      console.log('Vui lòng nhập ID để xóa dữ liệu');
    }
  }
  onUpdateProduct(): void {
    this.updateProduct(this.product, this.updatedData)
      .subscribe(
        () => {
          console.log('Cập nhật dữ liệu thành công');
          // Thực hiện các hành động khác sau khi cập nhật thành công
        },
        (error) => {
          console.error('Lỗi cập nhật dữ liệu:', error);
        }
      );
  }
  deleteProduct(id:number){
   this.ProductService.deleteProduct(id).subscribe(data=>{
    this.app = this.app.filter((product:any)=>{
        return product.id =! id
    })
   })
  }
}
