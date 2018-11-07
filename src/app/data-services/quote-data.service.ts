import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { quoteListObject, quoteObject } from '../objects/quote.object';
import { ItemObject } from '../objects/item.object';


@Injectable({
  providedIn: 'root',
})
export class QuoteDataService {

  constructor(private afs: AngularFirestore,) { }

  public getQuoteList():Observable<quoteListObject[]>{
    return this.afs.collection<quoteListObject>('Quotes', ref => ref.orderBy('DateReceived', 'desc')).valueChanges();
  }

public getQuoteItems(QId:string):Observable<ItemObject[]>{
  return this.afs.collection<ItemObject>('Items', ref => ref.where('Quote.QuoteId', '==', QId)).valueChanges();
}

public getQuote(QId:string):Observable<quoteObject>{
  return this.afs.doc<quoteObject>('Quotes/' + QId).valueChanges();
}


public addNewQuote(dte:Date){
  this.afs.collection('Quotes').add({'DateReceived' : dte}).then(
    ret => {
      ret.update({'QuoteId': ret.id});
    }
  );
}


}
