import { Item } from '../models/item';



export class AddItem {
  static readonly type = '[Item] Add';

  constructor(public payload: Item) {}
}

export class DeleteItem {
  static  readonly  type = '[Item] Delete';
  constructor(public  id: number) {}
}

export class UpdateItemAdd {
  static readonly type = '[Item] UpdateAdd';

  constructor( public id: number) {
  }
}

export class CountDown {
  static readonly type = '[Item] UpdateDelete';

  constructor( public id: number) {
  }
}
