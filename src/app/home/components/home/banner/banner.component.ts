import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  //creamos un array tipo string
  images: string[] = [
    //almacenaremos las imagenes que iran en el swiper del home
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
