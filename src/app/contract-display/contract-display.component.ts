import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ContractItem } from '../ClassFolder/contractListItem';
import { MatDividerModule } from '@angular/material/divider';
import { CustomerClass } from '../ClassFolder/customer';
import { CompanyBranch } from '../ClassFolder/companyBranch';
import { EmployeeClass } from '../ClassFolder/Employee';

@Component({
  selector: 'contract-display',
  imports: [MatCardModule,MatDividerModule],
  templateUrl: './contract-display.component.html',
  styleUrl: './contract-display.component.scss'
})
export class ContractDisplayComponent {
  ThisContract? : ContractItem = new ContractItem(12342,new CustomerClass(1,'misha','Lviv','+380000000'),'health',new Date,1000
  , new CompanyBranch(1,"Lviv","street","+3800000000"), new EmployeeClass(1,"Max","Maximus","street2","+3800000001"))
}
