import { Component } from '@angular/core';
import { ContractListComponent } from "../contract-list/contract-list.component";
import { ContractDisplayComponent } from "../contract-display/contract-display.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'main-page',
  imports: [
      ContractListComponent,
      MatButton,
      ContractDisplayComponent,
      RouterLink,
      RouterOutlet
    ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  isAdmin : boolean = false;
}
