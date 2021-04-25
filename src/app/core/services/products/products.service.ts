import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';
// se importa el modulo HttpClient para hacer peticiones
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // inyectamos las dependencias en el constructor
  constructor(private http: HttpClient) {}

  // creamos metodo para solicitar todos los productos
  getAllProducts() {
    // hacemos la petiion con el verbo get e indicamos que resolvera un array de tipo Product
    return this.http.get<Product[]>(environment.uri_api);
  }

  // creamos metodo para solicitar un porducto en especifico pasando el id como parametro
  getProduct(id: string) {
    // retornamos la peticion tipo GET pasando la url y el id del producto
    return this.http.get<Product>(`${environment.uri_api}${id}`);
  }

  // creamos metodo para crear productos que reviben por parametro elproducto acrear que es de tipo Product
  createProduct(product: Product) {
    // retornamos la peticion tipo POST y pasamos la url donde se hace la peticion y el producto a crear
    return this.http.post(environment.uri_api, product);
  }

  // creamos metodo editar pasando el id como parametro y los cambios que seran tipo Partial
  updateProduct(id: string, changes: Partial<Product>) {
    // retornamos la peticion tipo PUT pasando la url con el id y los cambios como parametro
    return this.http.put(`${environment.uri_api}${id}`, changes);
  }

  // creamos metodo delete pasando el id del producto a eliminar como parametro
  deleteProduct(id: string) {
    // retornamos la peticion tipo DELETE pasando la url y el id del producto a eliminar
    return this.http.delete(`${environment.uri_api}${id}`);
  }
}
