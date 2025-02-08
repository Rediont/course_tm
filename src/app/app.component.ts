import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { filter, range, map } from 'rxjs';
import { ContractListComponent } from "./contract-list/contract-list.component";

@Component({
  selector: 'app-root',
  imports: [ContractListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showForm = true;



}
