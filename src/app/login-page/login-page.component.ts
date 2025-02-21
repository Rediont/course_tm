import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login-page',
  imports: [NgIf, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  username = ''
  password = ''
  errorMessage = ''
  apiUrl = 'https://localhost:3000/login/'

  constructor(private http: HttpClient, private router: Router){}

  login() : void  {
    const url = `${this.apiUrl}?username=${this.username}&password=${this.password}`;

    this.http.get(url).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['']);
      },
      error: (error) => {
        this.errorMessage = 'Login failed';
        console.error('Error:', error);
      }
    });
  }
}
