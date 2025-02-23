import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ContractItem } from '../ClassFolder/contractListItem';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { ContractsService } from '../services/contract.service/contracts.service';

@Component({
  selector: 'contract-display',
  imports: [MatCardModule,MatDividerModule],
  templateUrl: './contract-display.component.html',
  styleUrl: './contract-display.component.scss'
})
export class ContractDisplayComponent {
  currentContract! : ContractItem;

  constructor(private contractService: ContractsService, private route: ActivatedRoute)  {}

  ngOnInit() {
    // Отримуємо `id` з URL
    this.route.paramMap.subscribe(params => {
      const contractId = Number(params.get('id')); // Конвертуємо в число
      if (!isNaN(contractId)) {
        this.currentContract = this.contractService.getContractDisplay(contractId);
      }
    });
  }

}
