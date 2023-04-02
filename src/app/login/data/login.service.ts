import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  login(email: string, pwd: string): Observable<boolean> {
    return of(email === 'example123@gmail.com' && pwd === 'way2Success@9');
  }
}
