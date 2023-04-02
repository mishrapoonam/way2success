import { Component } from '@angular/core';
import { Authservice } from './data/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName: string = '';
  password: string = '';

  constructor(private authServcie: Authservice, private router: Router) {}
  onLogin() {
    this.authServcie.login(this.userName, this.password).subscribe((data) => {
      if (data) {
        // Store token in local storage
        localStorage.setItem('token', 'example-token');
        // Redirect to dashboard or another screen
        this.router.navigate(['/dashboard']);
      } else {
        console.log('I could not log in');
      }
    });
  }
}
