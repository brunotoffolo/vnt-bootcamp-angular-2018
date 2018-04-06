import { ShoppingListService } from '../../shopping-list.service';
import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../class/item';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input("item") private listItem: Item;
  public deleted: boolean = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {}

  private remove(): void {
    this.shoppingListService.deleteItem(this.listItem['key']);
  }

  private cross(): void {
    this.listItem.disabled = true;
    this.shoppingListService.updateItem(this.listItem['key'], this.listItem);
  }

}
