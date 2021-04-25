import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // creamos un array vacio de tipo Product
  products: Product[];

  // las dependencias se inyectan en el constructor
  constructor(private productsService: ProductsService) {}

  // en ngOnInit es donde se hacen las peticiones de datos a servicios
  ngOnInit(): void {
    // llamamos a la funcion para hacer la peticion de datos
    this.fetchProducts();
  }

  clickProduct(id: number): void {}

  // se crea el metodo para traer los productos
  fetchProducts(): void {
    //llamamos al metodo getAllProducts que esta en productsService, luego nos subscribimos para poder hacer algo con estos products
    this.productsService.getAllProducts().subscribe((products) => {
      // asiganmos al array que creamos la data que nos vino con la peticion
      this.products = products;
    });
  }
}
