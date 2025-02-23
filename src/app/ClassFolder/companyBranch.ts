export class CompanyBranch {
  public readonly id: number;
  public readonly name: string;
  public readonly address : string;

  constructor(id : number, name : string, address : string){
    this.id = id;
    this.name = name;
    this.address = address;
  }
}
