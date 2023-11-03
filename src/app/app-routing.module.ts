import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/Admin/addProduct.component';
import { ProductlsListComponent } from './components/productList/productList.component';
import { productDetailsComponent } from './components/productDetails/prodectDetail.component';
import { AuthGuard } from './services/authGuard.service';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductlsListComponent },
  { path: 'products/:id', component: productDetailsComponent },
  { path: 'add', component: AddProductComponent , canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }