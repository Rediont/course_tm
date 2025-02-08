import { CustomerClass } from "./customer";

export class ContractItem {
  public readonly id: number;
  private Customer : CustomerClass;
  public readonly creationDate: Date;
  public readonly insuranceAmount : number;
  public readonly type: string;

  constructor(id : number, customer : CustomerClass , type : string, creationDate: Date, insuranceAmount : number){
    this.id = id;
    this.Customer = customer;
    this.creationDate = creationDate;
    this.insuranceAmount = insuranceAmount;
    this.type = type;
  }

  public getCustomerId(){
    return this.Customer.id;
  }

  public getCustomerCredentials(){
    return this.Customer.name;
  }

}
