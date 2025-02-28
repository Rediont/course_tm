import { CompanyBranch } from "./companyBranch";

export class EmployeeClass {
  public readonly id : number;
  public readonly name : string;
  public readonly surname : string;
  public readonly address : string;
  public readonly phoneNumber : string;
  public readonly branch : CompanyBranch;

  constructor(id : number, name : string, surname : string, address : string, phoneNumber : string, branch : CompanyBranch){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.branch = branch;
  }

}
