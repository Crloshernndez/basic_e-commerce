import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  error: string = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  saveRegister() {
    if (!this.registerForm.valid) {
      return;
    }
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    this.authService.registerUser(email, password).subscribe(
      (resData) => {
        console.log(resData);
        this.registerForm.reset();
        this.router.navigate(['/logIn']);
      },
      (errorRes) => {
        this.error = errorRes;
        console.log(errorRes);
      }
    );
  }
}
