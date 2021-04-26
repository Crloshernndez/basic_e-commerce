import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth/auth.service';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;
  isAuthenticated: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
  }

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = user ? true : false;
    });
  }

  onClick() {
    if (this.isAuthenticated) {
      this.authService.logOutUser();
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/logIn']);
    }
  }
}
