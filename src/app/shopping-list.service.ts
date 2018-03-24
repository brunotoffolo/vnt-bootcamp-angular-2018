import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;

  constructor() {
    this.listItems = [{
      name: 'Bread',
      disabled: false
    },{
      name: 'Butter',
      disabled: false
    },{
      name: 'Coffee',
      disabled: false
    },{
      name: 'Cookies',
      disabled: true
    }];
  }

  public findAll(): Array<any> {
    return this.listItems;
  }

  public add(item: any): void {
    let duplicate = this.listItems.filter(i => i.name === item.name);

    if (duplicate.length > 0) {
      duplicate[0].disabled = false;
      return;
    }

    let newItem = {
      name: item.name,
      disabled: item.disabled
    };
    this.listItems.unshift(newItem);
  }

  public remove(item: any): void {
    let index = this.listItems.indexOf(item);
    if (index >= 0) {
      this.listItems.splice(index, 1);
    }
  }

  public cross(item: any): void {
    let index = this.listItems.indexOf(item);
    if (index >= 0) {
      this.listItems[index].disabled = true;
    }
    this.reorderList();
  }

  private reorderList(): void {
    this.listItems = this.listItems.sort((a, b) => {
      if (a.disabled === false) {
        return -1;
      }
      if (b.disabled === true) {
        return 0;
      }
      return 1;
    });
  }

}
