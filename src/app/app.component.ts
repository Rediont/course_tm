import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

import { filter, range, map } from 'rxjs';
import { ContractListComponent } from "./contract-list/contract-list.component";

@Component({
  selector: 'app-root',
  imports: [
    ContractListComponent,
    MatButton
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
