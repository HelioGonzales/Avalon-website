import { TestBed } from '@angular/core/testing';

import { MerchServiceService } from './merch-service.service';

describe('MerchServiceService', () => {
  let service: MerchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
