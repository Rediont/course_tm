import { Component, OnInit } from '@angular/core';
import { ContractItem } from '../ClassFolder/contractListItem';
import { CustomerClass } from '../ClassFolder/customer';
import { MatCardModule } from '@angular/material/card';
import { CompanyBranch } from '../ClassFolder/companyBranch';
import { EmployeeClass } from '../ClassFolder/Employee';
import { Observable, startWith } from 'rxjs';
import { ContractsService } from '../services/contract.service/contracts.service';

@Component({
  selector: 'contract-list',
  standalone: true,
  imports:[MatCardModule],
  templateUrl: './contract-list.component.html',
  styleUrl: './contract-list.component.scss'
})

export class ContractListComponent implements OnInit {
  public contracts: ContractItem[];

  constructor(private contractService: ContractsService) {
    this.contracts = this.contractService.contracts;
  }

  public ngOnInit(): void {
    this.contractService.setContracts([
      new ContractItem(12342,new CustomerClass(1,'misha','Lviv','+380000000'),'health',new Date,1000, new CompanyBranch(1,"Lviv","street","+3800000000"), new EmployeeClass(1,"Max","Maximus","street2","+3800000002")),
      new ContractItem(123232,new CustomerClass(2,'misha2','Lviv','+380000001'),'health',new Date,10000 , new CompanyBranch(1,"Lviv","street","+3800000000"), new EmployeeClass(1,"Max","Maximus","street2","+3800000003")),
      new ContractItem(123232,new CustomerClass(2,'misha2','Lviv','+380000001'),'health',new Date,10000 , new CompanyBranch(1,"Lviv","street","+3800000000"), new EmployeeClass(1,"Max","Maximus","street2","+3800000004"))
    ]);
  }
}
