import { NgModule } from '@angular/core';
// importamos Routes para hacer el tipado
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    //indicamos la ruta
    path: '',
    // indicamos el componente a renderizar
    component: HomeComponent,
  },
];

// indicamos el decorador
@NgModule({
  // en los imports declaramos el RouterModule con unas rutas en especifico usando forChild y pasamos como parametro las rutas
  imports: [RouterModule.forChild(routes)],
  // tambien necesitamos exportar el RouterModule para que otros modulos lo puedan utilizar
  exports: [RouterModule],
})

// creamos la clase
export class HomeRoutingModule {}
