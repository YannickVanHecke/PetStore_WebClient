import { TestBed } from '@angular/core/testing';

import { Statistics } from './statistics.service';

describe('Statistics', () => {
  let service: Statistics;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Statistics);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
