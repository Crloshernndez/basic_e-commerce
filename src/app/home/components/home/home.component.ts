//AfterViewInit nos dice cuando los elementos hijos ja fueron renderizados
import { Component, OnInit, AfterViewInit } from '@angular/core';

//importamos la libreria swiper para hacer el banner del home
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

// creamos la clase e implementamos el OnInit y el AfterViewInit
export class HomeComponent implements OnInit, AfterViewInit {
  //creamos un elemento con el tipo Swiper
  mySwiper: Swiper;

  constructor() {}

  ngOnInit(): void {}

  //implementamos el metodo del ciclo de vida
  ngAfterViewInit() {
    //inicializamos el Swiper con una instancia y pasamos la clase
    this.mySwiper = new Swiper('.swiper-container');
  }
}
