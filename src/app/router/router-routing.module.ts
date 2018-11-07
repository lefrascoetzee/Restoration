import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Auth Gaurd
 */
import{AuthGuard} from './auth.guard';


/**
 * Restoration Components
 */
import {HomeComponent} from '../home/home.component';
import {ItemComponent} from '../item/item.component';
import {QuotelistComponent} from '../quotelist/quotelist.component';
import {QuotedetailComponent} from '../quotedetail/quotedetail.component';
import { ItemListComponent } from "../item-list/item-list.component";


const appRoutes: Routes = [
  { path: 'home',      component: HomeComponent},
  { path: 'item/:snr',  component: ItemComponent, canActivate: [AuthGuard] }, 
  { path: 'quotelist',  component: QuotelistComponent, canActivate: [AuthGuard] },
  { path: 'quote/:qid', component: QuotedetailComponent, canActivate: [AuthGuard] },
  { path: 'itemlist',   component: ItemListComponent, canActivate: [AuthGuard] },
  { path: '',           redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes,
    //{ enableTracing: true }  <-- debugging purposes only
    ) ],
  exports: [RouterModule]
})
export class RouterRoutingModule { }


