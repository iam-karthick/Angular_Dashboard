import { Component, Input, OnInit } from '@angular/core';
import { RestAPIService } from 'src/app/services/restAPI.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/app.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './prodectDetail.component.html',
  styleUrls: ['./prodectDetail.component.css']
})
export class productDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentProduct: Product = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';

  constructor(
    private restService: RestAPIService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProduct(this.route.snapshot.params["id"]);
    }
  }

  getProduct(id: string): void {
    this.restService.get(id)
      .subscribe({
        next: (data:any) => {
          this.currentProduct = data;
          console.log(data);
        },
        error: (e:any) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentProduct.title,
      description: this.currentProduct.description,
      published: status
    };

    this.message = '';

    this.restService.update(this.currentProduct.id, data)
      .subscribe({
        next: (res:any) => {
          console.log(res);
          this.currentProduct.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e:any) => console.error(e)
      });
  }

  updateProduct(): void {
    this.message = '';

    this.restService.update(this.currentProduct.id, this.currentProduct)
      .subscribe({
        next: (res:any) => {
          console.log(res);
          this.message = res.message ? res.message : 'This product was updated successfully!';
        },
        error: (e:any) => console.error(e)
      });
  }

  deleteProduct(): void {
    this.restService.delete(this.currentProduct.id)
      .subscribe({
        next: (res:any) => {
          console.log(res);
          this.router.navigate(['/products']);
        },
        error: (e:any) => console.error(e)
      });
  }

}