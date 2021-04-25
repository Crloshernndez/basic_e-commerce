import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ProductComponent, ProductsComponent, ProductDetailComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule, MaterialModule],
  exports: [],
})
export class ProductsModule {}
