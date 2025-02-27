import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CompanyBranch } from '../../ClassFolder/companyBranch';
import { ContractItem } from '../../ClassFolder/contractListItem';
import { CustomerClass } from '../../ClassFolder/customer';
import { EmployeeClass } from '../../ClassFolder/Employee';
import { Insurance } from '../../ClassFolder/insurance';
import { UserService } from '../user.service/user.service';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  private readonly _contracts$: BehaviorSubject<ContractItem[]> = new BehaviorSubject<ContractItem[]>([])
  public readonly contracts$ = this._contracts$.asObservable();

  public currentContractDisplay! : ContractItem;

  constructor(private http: HttpClient, private userService: UserService) {}

  get contracts() : ContractItem[] {
    return this._contracts$.getValue();
  }

  private set contracts(contracts: ContractItem[]){
    this._contracts$.next(contracts);
  }

  public setContracts(contracts: ContractItem[]) : void {
    this.contracts = contracts;
  }

  public getContractDisplay(id : number) : ContractItem {
    return this.contracts[id];
  }

  public async fetchContracts(page: number): Promise<void> {
    let url;
    let isAdmin = await firstValueFrom(this.userService.isAdmin$)
    console.log(isAdmin)
    if(isAdmin){
      url = `http://localhost:3000/contracts/show/${page}`
    }
    else{
      url = `http://localhost:3000/contracts/show/employee/${page}?employeeId=${this.userService.CurrentUserId}`
    }

    this.http.get<any[]>(url)
      .subscribe(contracts => {
        const contractItems = contracts.map(contract => {
          const customer = new CustomerClass(
            contract.client.id,
            contract.client.name,
            contract.client.surname,
            contract.client.phoneNumber,
            contract.client.address
          );

          const branch = new CompanyBranch(
            contract.employee.branch.id,
            contract.employee.branch.name,
            contract.employee.branch.address,
          );

          const employee = new EmployeeClass(
            contract.employee.id,
            contract.employee.name,
            contract.employee.surname,
            contract.employee.branch,
            contract.employee.phoneNumber,
            branch
          );

          const insurance = new Insurance(
            contract.insuranceType.id,
            contract.insuranceType.name,
            contract.insuranceType.description,
            contract.insuranceType.wageRate
          );

          return new ContractItem(
            contract.id,
            customer,
            new Date(contract.date),
            insurance,
            contract.insuranceAmount,
            branch,
            employee
          );
        });

        this._contracts$.next(contractItems); // Update the BehaviorSubject with the new contracts
      }, error => {
        console.error("Error fetching contracts:", error);
      });
  }
}
