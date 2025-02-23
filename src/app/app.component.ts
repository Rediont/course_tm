import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service/user.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isAdmin! : boolean;
  currentUserName : string = '';

  constructor(private userService : UserService)
  {
    this.userService.isAdmin$.subscribe(status => {
      this.isAdmin = status
    })
  }
}
