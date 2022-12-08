import { TestBed } from '@angular/core/testing';

import { DonationrequestService } from './donationrequest.service';

describe('DonationrequestService', () => {
  let service: DonationrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
