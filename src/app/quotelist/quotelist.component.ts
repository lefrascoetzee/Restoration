import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Import Restoration Data Setvices
 */
import {QuoteDataService} from '../data-services/quote-data.service';

/**
 * Import Restoration Objects
 */
import {quoteListObject} from '../objects/quote.object';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
  public listOfQuotes:Observable<quoteListObject[]>;

  constructor( private qds:QuoteDataService) { }

  ngOnInit() {
    this.listOfQuotes = this.qds.getQuoteList();
  }

}
