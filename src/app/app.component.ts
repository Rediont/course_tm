import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

import { filter, range, map } from 'rxjs';
import { ContractListComponent } from "./contract-list/contract-list.component";
import { ContractDisplayComponent } from "./contract-display/contract-display.component";

@Component({
  selector: 'app-root',
  imports: [
    ContractListComponent,
    MatButton,
    ContractDisplayComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
