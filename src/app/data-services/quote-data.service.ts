import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { quoteListObject } from '../objects/quote.object';
import { ItemObject } from '../objects/item.object';


@Injectable({
  providedIn: 'root',
})
export class QuoteDataService {

  constructor(private afs: AngularFirestore,) { }

  public getQuoteList():Observable<quoteListObject[]>{
    return this.afs.collection<quoteListObject>('Quotes', ref => ref.orderBy('DateReceived', 'desc')).valueChanges();
  }

public getQuote(QId:string):Observable<ItemObject[]>{
  return this.afs.collection<ItemObject>('Items', ref => ref.where('Quote.QuoteId', '==', QId)).valueChanges();
}


}
