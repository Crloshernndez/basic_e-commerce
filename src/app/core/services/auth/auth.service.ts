import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { User } from '../../../shared/models/user.model';
import { environment } from '../../../../environments/environment';

interface responseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient) {}

  registerUser(email: string, password: string) {
    return this.http
      .post<responseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.fireBaseApi_key}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleErrorResponse));
  }

  singInUser(email: string, password: string) {
    return this.http
      .post<responseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.fireBaseApi_key}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleErrorResponse),
        tap((resData) => {
          const expirationDate = new Date(
            new Date().getTime() + +resData.expiresIn * 1000
          );
          const user = new User(
            resData.email,
            resData.localId,
            resData.idToken,
            expirationDate
          );
          this.user.next(user);
          this.autoLogout(+resData.expiresIn * 1000);
          localStorage.setItem('userData', JSON.stringify(user));
          console.log(user);
        })
      );
  }

  logOutUser() {
    this.user.next(null);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogin() {
    // creamos la constante donde se almacenara la info del locar storage
    const userData: {
      // indicamos el tipo de dato ue tendra
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));

    // verificamos si no existen datos en el localStorage
    if (!userData) {
      // paramos el proceso de la funcion
      return;
    }

    //creamos una instancia de la clase User pasandole los datos que obtubimos desde el local storage
    const loaderUser = new User(
      userData.email,
      userData.id,
      userData._token,
      // usando el constructor new Data, pasamos _tokenExpirationDate de string a formato Data
      new Date(userData._tokenExpirationDate)
    );

    // usando el getter de la instancia user verificamos si el token esta vigente
    if (loaderUser.token) {
      //si es true lo emitimos el behaviorSubject pasando al loaderUser
      this.user.next(loaderUser);
      const expirationToken =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationToken);
    }
  }

  autoLogout(expirationDuration) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOutUser();
    }, expirationDuration);
  }

  private handleErrorResponse(errorRes: HttpErrorResponse) {
    let errorMessage = 'An Unknow Error Ocurred!!!';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email Already Exist!!';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password Invalid!!!';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'To Many Attempts, Please Try Later';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email Not Exist!!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Password Invalid!!!';
        break;
      case 'USER_DISABLED':
        errorMessage = 'User Disabled';
        break;
    }
    return throwError(errorMessage);
  }
}
