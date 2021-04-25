import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importamos los servicios que usara el modulo
import { ProductsService } from './services/products/products.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  // en providers indicaremos los servicios que proveera nuestro core.module
  providers: [ProductsService],
})
export class CoreModule {}
