import { State, Action, StateContext, Selector  } from '@ngxs/store';
import {Item} from '../models/item';
import {AddItem, CountDown, DeleteItem, UpdateItemAdd} from '../action/item.action';


export class ItemStateModel {
  items: Item [];
}
@State<any>({
  name: 'items',
  defaults: {
    items: [],
  }
})

export class ItemState {

  @Selector()
  static getItems(state: ItemStateModel) {
    return state.items;
  }

  @Action(AddItem)
  add({getState, patchState}: StateContext<ItemStateModel>, {payload}: AddItem) {
    const state = getState();
    patchState({
      items: [...state.items, payload]
    });
  }

  @Action(DeleteItem)
  deleteItem({getState, setState}: StateContext<ItemStateModel>, {id}: DeleteItem) {
    const state = getState();
    const filteredArray = state.items.filter(item => item.id !== id);
    setState({
      ...state, items: filteredArray,
    });
  }

  @Action(UpdateItemAdd)
  updateItem({getState, setState}: StateContext<ItemStateModel>, { id }: UpdateItemAdd) {
    const state = getState();
    const filteredArr = state.items.forEach((obj) => {
      if (obj.id === id) {
        console.log(obj.id);
        obj.counts++;
      }
    });
  }



@Action(CountDown)
countDown({getState, setState}: StateContext<ItemStateModel>, { id }: UpdateItemAdd) {
  const state = getState();
  const filteredArr = state.items.forEach((obj) => {
    if (obj.id === id) {
      if (obj.counts >= 2 ) {
        obj.counts--;
      }
    }
  });
}
}
