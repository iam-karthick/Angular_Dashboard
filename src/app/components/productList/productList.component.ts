import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/app.model';
import { RestAPIService } from 'src/app/services/restAPI.service';

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})
export class ProductlsListComponent implements OnInit {

  products?: Product[];
  currentProduct: Product = {};
  currentIndex = -1;
  title = '';

  constructor(private restService: RestAPIService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.restService.getAll()
      .subscribe({
        next: (data:any) => {
          this.products = data;
          console.log(data);
        },
        error: (e:any) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = {};
    this.currentIndex = -1;
  }

  setActiveProduct(Product: Product, index: number): void {
    this.currentProduct = Product;
    this.currentIndex = index;
  }

  removeAllProducts(): void {
    this.restService.deleteAll()
      .subscribe({
        next: (res:any) => {
          console.log(res);
          this.refreshList();
        },
        error: (e:any) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentProduct = {};
    this.currentIndex = -1;

    this.restService.findByTitle(this.title)
      .subscribe({
        next: (data:any) => {
          this.products = data;
          console.log(data);
        },
        error: (e:any) => console.error(e)
      });
  }

}