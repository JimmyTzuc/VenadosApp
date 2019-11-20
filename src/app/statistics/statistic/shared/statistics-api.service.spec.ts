import { TestBed } from '@angular/core/testing';

import { StatisticsApiService } from './statistics-api.service';

describe('StatisticsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatisticsApiService = TestBed.get(StatisticsApiService);
    expect(service).toBeTruthy();
  });
});
