import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Import Restoration Data Setvices
 */
import {QuoteDataService} from '../data-services/quote-data.service';

/**
 * Import Restoration Objects
 */
import {quoteListObject} from '../objects/quote.object';

/**
 * Import Restoration Components
 */
import {QuotedetailComponent} from '../quotedetail/quotedetail.component';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
  @ViewChild('QuotedetailComponent') Quotedetail: QuotedetailComponent;

  public listOfQuotes:Observable<quoteListObject[]>;
  public selectedQuote:string = null;

  constructor( private qds:QuoteDataService) { }

  ngOnInit() {
    this.listOfQuotes = this.qds.getQuoteList();
  }

  public selectQuote(qid:string){
    this.selectedQuote = qid;
    this.Quotedetail.getQouteDetails(this.selectedQuote)
  }

}
