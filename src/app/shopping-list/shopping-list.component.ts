import { ShoppingListService } from '../shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../class/item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public listItems: Array<any>;
  private itemToAdd: string = '';

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.findItems();
  }

  private findItems(): void {
    this.shoppingListService.findAllHttp().subscribe(
      res => {
        if (res) {
          this.listItems = Object.keys(res).map(id => {
            let item: Item = res[id];
            item.pushID = id;
            return item;
          });
        } else {
          this.listItems = [];
        }
      }
    );
  }

  private addItem(): void {

    let item = new Item(this.itemToAdd);
    let duplicate = this.listItems.filter(i => i.name === item.name)[0];

    if (duplicate) {
      duplicate.disabled = false;
      this.shoppingListService.editHttp(duplicate).subscribe(
        res => {
          console.log('O item foi alterado com sucesso!');
          duplicate.disabled = false;
        }
      );
    } else {
      this.shoppingListService.addHttp(item).subscribe(
        res => {
          console.log('O item foi adicionado com sucesso!');
          this.listItems.push(item);
        }
      );
    }
    this.itemToAdd = '';
  }
}
