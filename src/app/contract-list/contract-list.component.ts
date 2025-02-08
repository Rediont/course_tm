import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'contract-list',
  templateUrl: './contract-list.component.html',
  styleUrl: './contract-list.component.scss'
})
export class ContractListComponent {
  items : string[] = [
    'a',
    'b',
  ];
}
