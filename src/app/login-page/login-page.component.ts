import { Component, EventEmitter, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service/user.service';

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

  constructor(private userService : UserService){}

  login() {
    this.userService.login(this.username, this.password);
  }

}
