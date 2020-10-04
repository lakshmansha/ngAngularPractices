import { TestBed } from '@angular/core/testing';

import { NgModelformsService } from './ng-modelforms.service';

describe('NgModelformsService', () => {
  let service: NgModelformsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgModelformsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
