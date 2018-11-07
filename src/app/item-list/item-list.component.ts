import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';


import { ItemListDataService} from '../data-services/item-list-data.service'
import { ItemObject } from "../objects/item.object";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  public itemList:Observable<ItemObject[]>;
  public columnsToDisplay = ['StockNumber', 'Description', 'DateAdded'];
  public MTBLdataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private itlds:ItemListDataService
  ) {}

  ngOnInit() {
    this.itemList = this.getItemList();
    this.itemList.subscribe( res => {
      this.MTBLdataSource.data = res;
  })
  this.MTBLdataSource.paginator = this.paginator;  
  this.MTBLdataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    this.MTBLdataSource.filter = filterValue.trim().toLowerCase();

    if (this.MTBLdataSource.paginator) {
      this.MTBLdataSource.paginator.firstPage();
    }
  }

public getItemList(): Observable<ItemObject[]>{
    return this.itlds.getItemList();
  }
  
}
