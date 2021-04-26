//importamos desde el core de angula el decorador component, input
import { Component, Input, Output, EventEmitter } from '@angular/core';

//importamos el modelo de Product
import { Product } from '../../../../product.model';

import { CartService } from '../../../../core/services/cart/cart.service';

//indicamos con el decorador que funcion tendra indicar que tipo de roll cumplira la clase
@Component({
  // los componentes tienen metadata
  selector: 'app-product',
  templateUrl: './product.component.html', //se hace referencia a que archivo html esat enlasado
  styleUrls: ['./product.component.scss'], //se hace referencia a que archivo css esta ensalsado
})

//creamos la clase y la exportamos
export class ProductComponent {
  //indicamos con un decorador que el product va a ser de tipo input
  @Input() product: Product; // esto es equivalente a props
  //se crea un evento que tendra como decorador output y se coloca nombre a dicho evento y sera de tipo eventEmitter
  @Output() productClicked: EventEmitter<any> = new EventEmitter(); //para inicializar el output se debe crear una instancia del EventEmitter

  // se crea el constructor que viene por defecto en cualquier clase
  constructor(private cartService: CartService) {}

  //se crea un metodo que sera un output del html
  addCart() {
    // this.productClicked.emit(this.product.id);
    console.log('anadir al carrito');
    //para emitir el valor al componente padre
    this.cartService.addCart(this.product);
  }
}
