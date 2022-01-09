import { TestBed } from '@angular/core/testing';

import { ProductsInOrderService } from './products-in-order.service';

describe('ProductsInOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsInOrderService = TestBed.get(ProductsInOrderService);
    expect(service).toBeTruthy();
  });
});
