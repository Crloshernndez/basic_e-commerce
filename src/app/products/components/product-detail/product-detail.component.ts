import { Component, OnInit } from '@angular/core';
//importamos dos instancias, la primera sera una inyeccion de dependencia y la segunda sera de tipado
import { ActivatedRoute, Params } from '@angular/router';

// importamos productsServices que es una inyeccion de dependencias
import { ProductsService } from '../../../core/services/products/products.service';
// importamos el modelo de Product para usarlo como tipado
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  // tipamos product con el modelo importado Product
  product: Product;

  constructor(
    // insertamos en el constructor las inyecciones de dependencia
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  // se reciven datos en el ngOnInit
  ngOnInit(): void {
    // obtenemos el params que es el id del producto desde la ruta, nos subscribimos para crear una funcion que tendra como parametro el params de la ruta
    this.route.params.subscribe((params: Params) => {
      // guardamos ese id que obtuvimos desde el params de la ruta en una constante
      const id = params.id;
      // llamamos la funcion fetchProduct pasando como parametro la constante id que tiene guardado el numero id que se paso como params por la url
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  // construimos la funcion para traer un producto pasando como parametro el id
  fetchProduct(id: string): void {
    // desde productsService traemos el metodo getProduct pasando el id como parametro y nos subscribimos para crear una funcion pasando la data como parametro
    this.productsService.getProduct(id).subscribe((product) => {
      // imprimimos los datos en consola
      console.log(product);
      // asignamos el producto obtenido como retorno de la funcion
      this.product = product;
    });
  }

  // creamos el metodo para crear un producto
  createProduct() {
    const newProduct: Product = {
      id: '10',
      title: 'nuevo desde angular',
      image:
        '/home/chinox/PROYECTOS/Angular/tienda-platzi/src/assets/images/banner-2.jpg',
      price: 5000,
      description: 'ultimo lanzamiento',
    };

    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      title: 'editado desde angular',
      price: 10000,
      description: 'ultima edicion lanzamiento',
    };

    this.productsService
      .updateProduct('10', updateProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('10').subscribe((rta) => {
      console.log(rta);
    });
  }
}
