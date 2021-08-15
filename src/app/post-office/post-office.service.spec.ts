import { TestBed } from '@angular/core/testing';

import { PostOfficeService } from './post-office.service';

describe('PostOfficeService', () => {
  let service: PostOfficeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostOfficeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
