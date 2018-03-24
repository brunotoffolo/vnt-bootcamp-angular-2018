import { ShoppingListService } from '../shopping-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private listItems: Array<any>;

  private itemToAdd: string = '';

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.listItems = this.shoppingListService.findAll();
  }

  private addItem(): void {
    let item = {
      name: this.itemToAdd,
      disabled: false
    }
    this.shoppingListService.add(item);
    this.itemToAdd = '';
  }

}
