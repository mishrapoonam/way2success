import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  private token: string = '';

  login(email: string, pwd: string): Observable<boolean> {
    this.token = '999success';
    return of(email === 'example123@gmail.com' && pwd === 'way2Success@9');
  }

  logout() {
    // Simulate a logout request
    this.token = '';
  }

  getToken() {
    return this.token;
  }

  verifyToken(token: string) {
    // Verify the token on the server side
    return token === this.token;
  }
}
