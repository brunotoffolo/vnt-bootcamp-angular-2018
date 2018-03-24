import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input("item") private listItem: any;

  constructor() { }

  ngOnInit() {
    console.log(this.listItem);
  }

}
