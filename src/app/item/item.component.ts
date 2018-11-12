import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * Restoration Services
 */
import {ItemDataService} from '../data-services/item-data.service';

/**
 * Restoration Object import
 */
import {ItemObject, ItemPhotosObject} from '../objects/item.object';
import {quoteObject} from '../objects/quote.object';
import {invoiceObject} from '../objects/invoice.object';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public items:Observable<ItemObject>;
  public itemPhotos: Observable<ItemPhotosObject[]>;
  public itemUpdate: ItemObject = new ItemObject();
  public showItem:boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itd:ItemDataService 
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.items = this.itd.getItem(params['snr'])
      this.items.subscribe(res =>{
        this.itemUpdate = res;
      });
      this.itemPhotos = this.itd.getItemPhotos(params['snr']);
    });

  }

  updateItem(){
    this.itd.updateItem(this.itemUpdate);
  }

  addItem(){
    this.itd.addItem(this.itemUpdate);
  }

  clearItem(){
    let tmpItem = new ItemObject();
    this.itemUpdate = tmpItem;
    this.showItem = true;
  }

  addQuote(){
    let tmpQuote = new quoteObject();
    this.itemUpdate.Quote = tmpQuote;
  }

  addInvoice(){
    let tmpInv = new invoiceObject();
    this.itemUpdate.Invoice = tmpInv;
  }

}



