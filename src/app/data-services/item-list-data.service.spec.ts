import { TestBed, inject } from '@angular/core/testing';

import { ItemListDataService } from './item-list-data.service';

describe('ItemListDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemListDataService]
    });
  });

  it('should be created', inject([ItemListDataService], (service: ItemListDataService) => {
    expect(service).toBeTruthy();
  }));
});
