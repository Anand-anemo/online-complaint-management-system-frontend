import { TestBed } from '@angular/core/testing';

import { ComplaintResolverService } from './complaint-resolver.service';

describe('ComplaintResolverService', () => {
  let service: ComplaintResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
