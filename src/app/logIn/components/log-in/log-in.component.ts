import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  error: string = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onLogin() {
    if (!this.loginForm) {
      return;
    }
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.singInUser(email, password).subscribe(
      (resData) => {
        console.log(resData);
        this.loginForm.reset();
        this.router.navigate(['/products']);
      },
      (errorRes) => {
        this.error = errorRes;
      }
    );
  }
}
