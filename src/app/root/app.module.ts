import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';

/**
 * Firestore and AngularFire Imports
 */
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import {FlexLayoutModule} from "@angular/flex-layout";

/**
 * Restoration Services Imports
 */
import {ItemDataService} from '../data-services/item-data.service';
import {MyOwnCustomMaterialModule} from '../root/app.material.module';
import {QuoteDataService} from '../data-services/quote-data.service';

/**
 * Restoration Component Imports
 */
import {RouterRoutingModule} from '../router/router-routing.module';
import {ItemComponent} from'../item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {QuotelistComponent} from '../quotelist/quotelist.component';
import {QuotedetailComponent} from '../quotedetail/quotedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    QuotelistComponent,
    QuotedetailComponent
  ],
  imports: [
    BrowserModule,
    RouterRoutingModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, BrowserAnimationsModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    ItemDataService,
    QuoteDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
