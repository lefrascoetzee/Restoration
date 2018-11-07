import { Injectable } from '@angular/core';
import { AppModule } from '../root/app.module';
import {AngularFirestore} from 'angularfire2/firestore';
import {ItemObject} from '../objects/item.object';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ItemDataService {

  constructor(private afs: AngularFirestore,) { }

  public getItem(stockNr: string):Observable<ItemObject>{
      return this.afs.doc<ItemObject>('Items/' + stockNr).valueChanges();
  }

  public updateItem(itm:ItemObject){
    let itmTemp: ItemObject = itm;
    itmTemp.DateLastUpdated = new Date();
    if(itmTemp.hasOwnProperty('Invoice')){
      itmTemp.Invoice.LastUpdated = new Date ();
    }
    if(itmTemp.hasOwnProperty('Quote')){
      itmTemp.Quote.LastUpdated = new Date ();
    }
      this.afs.doc('Items/' + itm.Stocknr).set(JSON.parse(JSON.stringify(itmTemp)));
  }

  public addItem(itm:ItemObject){
    this.afs.doc('Items/' + itm.Stocknr).set(JSON.parse(JSON.stringify(itm)));
}

}
