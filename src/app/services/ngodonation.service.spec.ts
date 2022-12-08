import { TestBed } from '@angular/core/testing';

import { NgodonationService } from './ngodonation.service';

describe('NgodonationService', () => {
  let service: NgodonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgodonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
