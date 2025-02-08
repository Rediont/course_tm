export class WorkerClass {
  public readonly id : number;
  public readonly name : string;
  public readonly surname : string;
  public readonly address : string;

  constructor(id : number, name : string, surname : string, address : string){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.address = address;
  }

}
