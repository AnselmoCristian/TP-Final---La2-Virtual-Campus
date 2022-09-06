import { TestBed } from '@angular/core/testing';

import { ExternApiService } from './externApi.service';

describe('ExternApiService', () => {
  let service: ExternApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
