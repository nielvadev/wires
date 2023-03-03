import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { AuthSignIn, AuthSignUp, AuthUser } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _authUser!: AuthUser;

  get user(): AuthUser {
    return { ...this._authUser };
  }

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/auth/signin`;
    const body = { username, password };

    return this.http
      .post<AuthSignIn>(url, body) //Returns an Observable of Object
      .pipe(
        tap((resp: AuthSignIn) => {
          if (resp.status) {
            localStorage.setItem('token', resp.access_token!); //Save token in localStorage
            this._authUser = {
              username,
              access_token: resp.access_token!,
              status: resp.status,
            };
            localStorage.setItem('username', username); //Save user in localStorage
          }
        }),
        map((resp: AuthSignIn) => resp.status),
        catchError((err) => of(err))
      );
  }

  register(
    username: string,
    password: string,
    email: string,
    fullname: string
  ) {
    const url = `${this.baseUrl}/auth/signup`;
    const body = { username, password, email, fullname };

    return this.http
      .post<AuthSignUp>(url, body) //Returns an Observable of Object
      .pipe(
        map((resp: AuthSignUp) => (resp.id ? true : false)),
        catchError((err) => of(err))
      );
  }

  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    return token.length === 0 ? of(false) : of(true);
  }

  logout = () => localStorage.clear();  // Clear localStorage

  getUserName = () => localStorage.getItem('username') || '';
}
