import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user.service/user.service';

@Component({
  selector: 'main-page',
  imports: [
      RouterLink,
      RouterOutlet
    ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  isAdmin! : boolean;

  constructor(private userService : UserService){}

  ngOnInit(){
    this.userService.isAdmin$.subscribe(status => {
      this.isAdmin = status
    })
    console.log(this.isAdmin);
  }

}
