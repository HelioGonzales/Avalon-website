import { TestBed } from '@angular/core/testing';

import { ShowServiceService } from './show-service.service';

describe('ShowServiceService', () => {
  let service: ShowServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
