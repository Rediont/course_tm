export class CustomerClass {
  public readonly id: number;
  public readonly name: string;
  public readonly address : string;
  public readonly phone: string;

  constructor(id : number, name : string, address : string, phone: string){
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
  }

}
