import { TestBed } from '@angular/core/testing';

import { AddgroceryService } from './addgrocery.service';

describe('AddgroceryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddgroceryService = TestBed.get(AddgroceryService);
    expect(service).toBeTruthy();
  });
});
