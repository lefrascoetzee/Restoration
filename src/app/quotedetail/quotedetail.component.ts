import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';


import { ItemObject } from '../objects/item.object';
import {QuoteDataService} from '../data-services/quote-data.service';

@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.component.html',
  styleUrls: ['./quotedetail.component.css']
})
export class QuotedetailComponent implements OnInit {
  public quoteDetails:Observable<ItemObject[]>;
  public showQuoteDetails: boolean = false;


  constructor(
    private qds:QuoteDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => { 
      if(params['qid'] != null){
      this.getQouteDetails(params['qid']);
      this.showQuoteDetails = true;
    }
    });
  }

  getQouteDetails(qid:string){
      this.quoteDetails = this.qds.getQuote(qid);
      this.showQuoteDetails = true;
  }

}
