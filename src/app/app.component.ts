import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { filter, range, map } from 'rxjs';
import { LoginPageComponent } from "./login-page/login-page.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isAdmin : boolean = false;
  currentUser : string = '';

  constructor() {}
}
