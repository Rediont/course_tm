import { IListItem } from "./listItemInterface"

export class contractItem implements IListItem {
  public id: number;
  public name: string;


  constructor(id : number, name : string){
    this.id = id;
    this.name = name;
  }

}
