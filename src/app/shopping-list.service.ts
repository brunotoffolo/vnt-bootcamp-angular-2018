import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Item } from './class/item';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;

  get items(): Array<any> {
    return this.listItems;
  }

  set items(value: Array<any>) {
    this.listItems = value;
  }

  constructor(private _httpClient: HttpClient) {
    // this.listItems = [{
    //   name: 'Bread',
    //   disabled: false
    // },{
    //   name: 'Butter',
    //   disabled: false
    // },{
    //   name: 'Coffee',
    //   disabled: false
    // },{
    //   name: 'Cookies',
    //   disabled: true
    // }];
  }

  public findAllHttp(): Observable<Object> {
    return this._httpClient.get(environment.firebase.databaseURL + '/items.json');
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

  public addHttp(item: Item): Observable<Object> {
    return this._httpClient.post(environment.firebase.databaseURL + '/items.json', item);
  }

  public remove(item: any): void {
    let index = this.listItems.indexOf(item);
    if (index >= 0) {
      this.listItems.splice(index, 1);
    }
  }

  public removeHttp(item: Item): Observable<Object> {
    return this._httpClient.delete(`${environment.firebase.databaseURL}/items/${item.pushID}.json`);
  }

  public cross(item: any): void {
    let index = this.listItems.indexOf(item);
    if (index >= 0) {
      this.listItems[index].disabled = true;
    }
    this.reorderList();
  }

  public editHttp(item: any): Observable<Object> {
    return this._httpClient.put(`${environment.firebase.databaseURL}/items/${item.pushID}.json`, item);
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
