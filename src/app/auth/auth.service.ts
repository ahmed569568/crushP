import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:8000/auth/register';
  private _loginUrl = 'http://localhost:8000/auth/login';
  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
}
