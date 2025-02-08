import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractItem } from '../ClassFolder/contractListItem';
import { CustomerClass } from '../ClassFolder/customer';

@Component({
  selector: 'contract-list',
  templateUrl: './contract-list.component.html',
  styleUrl: './contract-list.component.scss'
})
export class ContractListComponent {
  items : ContractItem[] = [
    new ContractItem(12342,new CustomerClass(1,'misha','Lviv','+380000000'),'health',new Date,1000),
    new ContractItem(123232,new CustomerClass(2,'misha2','Lviv','+380000001'),'health',new Date,10000),
    new ContractItem(123232,new CustomerClass(2,'misha2','Lviv','+380000001'),'health',new Date,10000)
  ];
}
