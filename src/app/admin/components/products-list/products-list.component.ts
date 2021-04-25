import { Component, OnInit } from '@angular/core';

// importamos ProductsService para poder usar su metodo getAllProducts
import { ProductsService } from '../../../core/services/products/products.service';
// importamos el modelo Product para tipar
import { Product } from '../../../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
// creamos la clase
export class ProductsListComponent implements OnInit {
  // creamos un atributo que sera un array de tipo Product
  products: Product[] = [];

  // las dependencias las agregamos al constructor
  constructor(private productsService: ProductsService) {}

  // se crea una array llamado displayedColumns para indicar las columnas de la tabla que se renderizara
  displayedColumns: string[] = ['id', 'title', 'price', 'action'];

  // las peticiones a los servicios se deben hacer dentro de ngOnmInit
  ngOnInit(): void {
    // llamamos al metodo para peticiones
    this.fetchProducts();
  }

  // creamos metodo para peticiones
  fetchProducts() {
    // usaremos el metodo getAllProducts desde productsService y nos subscribimos
    this.productsService.getAllProducts().subscribe((products) => {
      // asignaremos la data al array products
      this.products = products;
    });
  }

  // editProduct(id: string) {
  //   this.productsService.updateProduct(id);
  // }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((rta) => {
      if (rta) {
        const index = this.products.findIndex((product) => product.id === id);
        this.products.splice(index, 1);
        this.products = [...this.products];
      }
    });
  }
}
