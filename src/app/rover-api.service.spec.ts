import { TestBed } from '@angular/core/testing';

import { RoverApiService } from './rover-api.service';

describe('RoverApiService', () => {
  let service: RoverApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoverApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
