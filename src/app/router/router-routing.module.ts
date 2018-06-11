import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Restoration Components
 */
import {ItemComponent} from '../item/item.component';
import {QuotelistComponent} from '../quotelist/quotelist.component';
import {QuotedetailComponent} from '../quotedetail/quotedetail.component';


const appRoutes: Routes = [
  { path: 'item/:snr',      component: ItemComponent },
  { path: 'quotelist',      component: QuotelistComponent },
  { path: 'quote/:qid',      component: QuotedetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [RouterModule]
})
export class RouterRoutingModule { }


