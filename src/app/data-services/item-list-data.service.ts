import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {ItemObject} from '../objects/item.object';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemListDataService {

  constructor(private afs: AngularFirestore,) { }

  public getItemList():Observable<ItemObject[]>{
    return this.afs.collection<ItemObject>('Items', ref => ref.orderBy('DateAdded', 'desc')).valueChanges();
  }

}
