import { TestBed } from '@angular/core/testing';

import { ZainservicesService } from './zainservices.service';

describe('ZainservicesService', () => {
  let service: ZainservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZainservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
