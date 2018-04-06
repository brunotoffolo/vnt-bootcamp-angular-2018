import { ShoppingListService } from '../shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../class/item';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public listItems: Observable<any[]>;
  private itemToAdd: string = '';

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.listItems = this.shoppingListService.listItemsFirebase;
  }

  private addItem(): void {
    this.shoppingListService.add(new Item(this.itemToAdd));
    this.itemToAdd = '';
  }
}
