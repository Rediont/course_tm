import { Component, OnInit } from '@angular/core';
import { ContractItem } from '../ClassFolder/contractListItem';
import { CustomerClass } from '../ClassFolder/customer';
import { MatCardModule } from '@angular/material/card';
import { CompanyBranch } from '../ClassFolder/companyBranch';
import { EmployeeClass } from '../ClassFolder/Employee';
import { Observable } from 'rxjs';
import { ContractsService } from '../services/contract.service/contracts.service';
import { NgFor, NgIf, AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'contract-list',
  standalone: true,
  imports:[
    MatCardModule,
    NgFor,
    NgIf,
    AsyncPipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './contract-list.component.html',
  styleUrl: './contract-list.component.scss'
})

export class ContractListComponent implements OnInit {
  public contracts : Observable<ContractItem[]>;

  private page : number = 1;

  constructor(private contractService: ContractsService) {
    this.contracts = this.contractService.contracts$;
  }

  public trackByFn(index: number, item: ContractItem): number {
    return item.id; // Унікальний ідентифікатор кожного контракту
  }

  public ngOnInit(): void {
    this.contractService.fetchContracts(this.page);
  }

  public displayNextPage() {
    this.page++
    console.log(this.page)
    this.contractService.fetchContracts(this.page);
  }

  public displayPrevPage() {
    this.page--
    console.log(this.page)
    this.contractService.fetchContracts(this.page);
  }
}
