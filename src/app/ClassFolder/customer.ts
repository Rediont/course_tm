export class CustomerClass {
  public readonly id : number;
  public readonly name : string;
  public readonly surname : string;
  public readonly address : string;
  public readonly phone : string;

  constructor(id : number, name : string, surname : string , address : string, phone: string){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.address = address;
    this.phone = phone;
  }

}
