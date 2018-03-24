import { ShoppingListService } from '../../shopping-list.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input("item") private listItem: any;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  private remove(): void {
    this.shoppingListService.remove(this.listItem);
  }

  private cross(): void {
    this.shoppingListService.cross(this.listItem);
  }

}
