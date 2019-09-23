import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Store } from '@ngxs/store';
import {AddItem} from '../../action/item.action';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  items: any;
  itemsArr: any;
  count = 0;

  goods: any = [
    {id: 0, counts: 1, prices: 100.00, weight: 20, description: 'Какой то товар с каким то описанием 1 ' },
    {id: 1, counts: 1, prices: 1200.00, weight: 26, description: 'Какой то товар с каким то описанием 2 ' },
    {id: 2, counts: 1, prices: 1004.00, weight: 25, description: 'Какой то товар с каким то описанием 3 ' },
    {id: 3, counts: 1, prices: 10.00, weight: 432, description: 'Какой то товар с каким то описанием 6' },

  ];

  constructor( private routs: Router,
               private store: Store) {
    this.items = this.store.select(state => state.items.items);
    this.itemsArr = this.items;
  }

  ngOnInit() {
  }

  goBasket() {
    this.routs.navigate(['/basket']);
  }

  addItem(id, counts, prices, weight, description) {
    console.log(id, counts, prices, weight, description);
    this.store.dispatch(new AddItem({ id, counts,  prices, weight, description}));
    this.count++;
    this.saveData();
  }

  saveData() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}
