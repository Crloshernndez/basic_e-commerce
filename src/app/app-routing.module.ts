import { NgModule } from '@angular/core';
// importamos desde angular el Routes para tipar el rutado, PreloadAllModules como estrategia de precarga
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

// importamos el guardian para limitar acceso a alguna ruta
import { AdminGuard } from '../adminGuard/admin.guard';

// se crea una constante de tipo Routes donde comenzaremos a indicar las rutas omo objetos
const routes: Routes = [
  {
    // creando vistas anidadas
    path: '', // indicamos la ruta
    component: LayoutComponent, //enlazamos el componente
    // dentro de children colocaremos todas las rutas que vallan estar enlazadas con el layout
    children: [
      {
        path: '', // cuando no halla ruta
        redirectTo: '/home', // redireccionamos hacia el home
        pathMatch: 'full', // confirma que esto ocurra cuando este la url vacia
      },
      {
        // indicamos la ruta
        path: 'home',
        // con la propiedad loadChildren cargaremos un modulo dinamicamente
        loadChildren: () =>
          // inmportamos el modulo y resolvemos la promesa y devolvemos el modulo
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register-form/register-form.module').then(
            (m) => m.RegisterFormModule
          ),
      },
      {
        path: 'logIn',
        loadChildren: () =>
          import('./logIn/log-in.module').then((m) => m.LogInModule),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./order/order.module').then((m) => m.OrderModule),
        canActivate: [AdminGuard],
      },
    ],
  },
  {
    path: 'admin',
    // indicamos que la ruta debe validar unos datos para poder acceder
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**', //indica que la url no hace mach con ninguna de las rutas
    loadChildren: () =>
      import('./page-not-found/pageNotFound.module').then(
        (m) => m.PageNotFountModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // indicamos que escoja un estrategia de precarga la cual sera el PreloadAllModules
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
