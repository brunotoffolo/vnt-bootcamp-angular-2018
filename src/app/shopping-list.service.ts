import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Item } from './class/item';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;
  itemsRef: AngularFireList<any>;
  public listItemsFirebase: Observable<any[]>;

  get items(): Array<any> {
    return this.listItems;
  }

  set items(value: Array<any>) {
    this.listItems = value;
  }

  constructor(private _httpClient: HttpClient, private db: AngularFireDatabase) {

    this.itemsRef = db.list('items', ref => ref.orderByChild('disabled'));

    // Use snapshotChanges().map() to store the key
    this.listItemsFirebase = this.itemsRef.snapshotChanges().map(changes => {

      console.log(changes);

      return changes.map(c => {
        console.log(c.payload.val());
        return ({ key: c.payload.key, ...c.payload.val() });
       // { key: c.payload.key, name: c.payload.val()['name'], disabled: c.payload.val()['disabled'], ammount: c.payload.val()['ammount'] }
      });
    });
  }

  public add(item: any): void {
    let subscription = this.listItemsFirebase.subscribe(list => {
      let duplicate = list.filter(i => i.name === item.name)[0];

      if (duplicate) {
        duplicate.disabled = false;
        this.updateItem(duplicate.key, duplicate);
      } else {
        this.itemsRef.push(item);
      }

      subscription.unsubscribe();
    });
  }

  updateItem(key: string, item: Item) {
    this.itemsRef.update(key, item).then(res => console.log('Item alterado com sucesso!') );

  }

  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }

  deleteEverything() {
    this.itemsRef.remove();
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
