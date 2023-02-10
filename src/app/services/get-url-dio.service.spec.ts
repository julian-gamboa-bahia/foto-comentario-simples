import { TestBed } from '@angular/core/testing';

import { GetUrlDioService } from './get-url-dio.service';

describe('GetUrlDioService', () => {
  let service: GetUrlDioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUrlDioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
