import { CompanyBranch } from "./companyBranch";
import { CustomerClass } from "./customer";
import { EmployeeClass } from "./Employee";

export class ContractItem {
  public readonly id: number;
  private Customer : CustomerClass;
  public readonly creationDate: Date;
  public readonly insuranceAmount : number;
  public readonly type: string;
  private Branch : CompanyBranch;
  private Employee : EmployeeClass;

  constructor(id : number, customer : CustomerClass , type : string, creationDate: Date,
     insuranceAmount : number, branch : CompanyBranch, emloyee : EmployeeClass){
    this.id = id;
    this.Customer = customer;
    this.creationDate = creationDate;
    this.insuranceAmount = insuranceAmount;
    this.type = type;
    this.Branch = branch;
    this.Employee = emloyee;
  }

  public getCustomerId(){
    return this.Customer.id;
  }

  public getCustomerCredentials(){
    return this.Customer.name;
  }

  public getBranchAddress(){
    return this.Branch.address;
  }

  public getBranchName(){
    return this.Branch.name;
  }

  public getEmployeeCredentials(){
    return this.Employee.name + " " + this.Employee.surname;
  }

  public getEmployeePhoneNumber(){
    return this.Employee.phoneNumber;
  }

}
