export class Insurance {
  public readonly id : number;
  public readonly name : string;
  public readonly description : string;
  public readonly wageRate : number;

  public constructor(id: number, name: string, description: string, wageRate: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.wageRate = wageRate;
  }

}
