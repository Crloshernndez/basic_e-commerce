import { NgModule } from '@angular/core';
// se importa el commonModule para que reconozca las directivas de angular(ngFor, ngIf, etc)
import { CommonModule } from '@angular/common';

// importamos los componentes que usara el modulo
import { BannerComponent } from './components/home/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

// necesitamos importar el modulo HomeRoutingModule
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

// declaramos el decorador
@NgModule({
  // en declarations ingresaremos en un array los modulos que usara el modulo
  declarations: [BannerComponent, HomeComponent],
  // declaramos en imports los modulos que se usaran
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: [],
})
export class HomeModule {}
