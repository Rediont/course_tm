export class EmployeeClass {
  public readonly id : number;
  public readonly name : string;
  public readonly surname : string;
  public readonly address : string;
  public readonly phoneNumber : string;

  constructor(id : number, name : string, surname : string, address : string, phoneNumber : string){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

}
