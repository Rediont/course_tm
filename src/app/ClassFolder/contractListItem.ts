import { CompanyBranch } from "./companyBranch";
import { CustomerClass } from "./customer";
import { EmployeeClass } from "./Employee";
import { Insurance } from "./insurance";

export class ContractItem {
  public readonly id: number;
  private Customer : CustomerClass;
  public readonly creationDate: Date;
  private Insurance : Insurance;
  public readonly insuranceAmount : number;
  private Branch : CompanyBranch;
  private Employee : EmployeeClass;

  constructor(id : number, customer : CustomerClass , creationDate: Date,
    insurance : Insurance, insuranceAmount : number, branch : CompanyBranch, emloyee : EmployeeClass){
    this.id = id;
    this.Customer = customer;
    this.creationDate = creationDate;
    this.Insurance = insurance;
    this.insuranceAmount = insuranceAmount;
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

  public getInsuranceId() {
    return this.Insurance.id;
  }

  public getInsuranceName() {
    return this.Insurance.name;
  }

  public getInsuranceDescription() {
    return this.Insurance.description;
  }

}
