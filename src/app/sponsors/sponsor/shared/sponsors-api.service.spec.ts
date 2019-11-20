import { TestBed } from '@angular/core/testing';

import { SponsorsApiService } from './sponsors-api.service';

describe('SponsorsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SponsorsApiService = TestBed.get(SponsorsApiService);
    expect(service).toBeTruthy();
  });
});
