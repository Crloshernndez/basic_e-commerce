import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CounterProductPipe } from './pipes/counter-product.pipe';

// importamos los componentes que contendra el modulo
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CartComponent } from '../cart/cart.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  // indicamos en declarations los componentes y pipes que usara el modulo
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CounterProductPipe,
  ],
  // indicamos en imports los modulos que usara nuestro modulo
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  // exportamos los componentes y pipes que queremos usar en otros modulos
  exports: [HeaderComponent, FooterComponent, CounterProductPipe],
})
// creamos la clase
export class SharedModule {}
