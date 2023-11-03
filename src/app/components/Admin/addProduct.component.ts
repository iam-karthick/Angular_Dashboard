import { Component } from '@angular/core';
import { Product } from 'src/app/models/app.model';
import { RestAPIService } from 'src/app/services/restAPI.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css']
})
export class AddProductComponent {

  product: Product = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private restService: RestAPIService) { }

  saveProduct(): void {
    const data = {
      title: this.product.title,
      description: this.product.description
    };

    this.restService.create(data)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e:any) => console.error(e)
      });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      title: '',
      description: '',
      published: false
    };
  }

}