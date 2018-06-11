import { Component, OnInit } from '@angular/core';
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

  constructor(
    private qds:QuoteDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.quoteDetails = this.qds.getQuote(params['qid'])
    });
  }

}
