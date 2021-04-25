import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../../product.model';

@Pipe({
  name: 'counterProduct',
})
export class CounterProductPipe implements PipeTransform {
  groupedProduct: any[] = [];

  transform(value: Product[]): any {
    value.forEach((product) => {
      if (this.groupedProduct.length === 0) {
        this.groupedProduct.push(Object.assign(product, { quantity: 1 }));
      } else {
        const repeatedProduct = this.groupedProduct.findIndex(
          (p) => p.id === product.id
        );
        if (repeatedProduct === -1) {
          this.groupedProduct.push(Object.assign(product, { quantity: 1 }));
        } else {
          this.groupedProduct[repeatedProduct].quantity++;
          this.groupedProduct[repeatedProduct].price =
            this.groupedProduct[repeatedProduct].quantity *
            this.groupedProduct[repeatedProduct].price;
        }
      }
    });
    return this.groupedProduct;
  }
}
