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

/**
 * Restoration Services Imports
 */
import {ItemDataService} from '../data-services/item-data.service';
import {MyOwnCustomMaterialModule} from '../root/app.material.module';
import {QuoteDataService} from '../data-services/quote-data.service';
import {AuthService} from '../auth-service/auth.service'

/**
 * Restoration Component Imports
 */
import {RouterRoutingModule} from '../router/router-routing.module';
import {ItemComponent} from'../item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {QuotelistComponent} from '../quotelist/quotelist.component';
import {QuotedetailComponent} from '../quotedetail/quotedetail.component';
import { HomeComponent } from '../home/home.component';
import { ItemListComponent } from '../item-list/item-list.component';

/**
 * Restoration Module Imports
 */
import {ImgModule} from'../imgModule/imgModule';
import { MenuComponent } from '../menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    QuotelistComponent,
    QuotedetailComponent,
    HomeComponent,
    ItemListComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterRoutingModule,
    MyOwnCustomMaterialModule,
    FormsModule,
    ImgModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, BrowserAnimationsModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    ItemDataService,
    QuoteDataService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
