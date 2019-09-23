import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import { Store} from '@ngxs/store';
import {Item} from '../../models/item';
import {DeleteItem, UpdateItemAdd, CountDown} from '../../action/item.action';




@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})


export class BasketComponent implements OnInit {

  items: Observable<Item>;

  constructor(private store: Store,
              private routs: Router,
  ) {
    this.items = this.store.select(state => state.items.items);
  }


  public cartData: [];

  ngOnInit() {
    this.updateData();
  }

  goShop() {
    this.routs.navigate(['/scope']);
  }
  updateData() {
    this.cartData = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(this.cartData);
  }



  deleteItem(id: number) {
    console.log(id);
    this.store.dispatch(new DeleteItem(id));
  }

  addItem(id: number) {
    console.log(id);
    this.store.dispatch(new UpdateItemAdd(id));
  }

  removeItem(id: number) {
    console.log(id);
    this.store.dispatch(new CountDown(id));
  }

}
