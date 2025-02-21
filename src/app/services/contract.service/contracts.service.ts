import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContractItem } from '../../ClassFolder/contractListItem';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  private readonly _contracts$: BehaviorSubject<ContractItem[]> = new BehaviorSubject<ContractItem[]>([])
  public readonly contracts$ = this._contracts$.asObservable();

  get contracts() : ContractItem[] {
    return this._contracts$.getValue();
  }

  private set contracts(contracts: ContractItem[]){
    this._contracts$.next(contracts);
  }

  public setContracts(contracts: ContractItem[]) : void {
    this.contracts = contracts;
  }


}
