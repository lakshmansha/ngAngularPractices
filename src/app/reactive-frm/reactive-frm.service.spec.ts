import { TestBed } from '@angular/core/testing';

import { ReactiveFrmsService } from './reactive-frm.service';

describe('ReactiveFrmsService', () => {
  let service: ReactiveFrmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveFrmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
