import { TestBed } from '@angular/core/testing';

import { AnimiapiService } from './animiapi.service';

describe('AnimiapiService', () => {
  let service: AnimiapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimiapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
