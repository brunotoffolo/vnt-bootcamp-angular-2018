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
    // this.shoppingListService.remove(this.listItem);

    this.shoppingListService.removeHttp(this.listItem).subscribe(
      res => {
        console.log('O item foi excluído com sucesso!');
        this.deleted = true;
      },
      err => { console.error('Não foi possível excluir o item.'); }
    );
  }

  private cross(): void {

    this.listItem.disabled = true;

    this.shoppingListService.editHttp(this.listItem).subscribe(
      res => {
        console.log('O item foi alterado com sucesso!');
      },
      err => { console.error('Não foi possível alterar o item.'); }
    );
  }

}
