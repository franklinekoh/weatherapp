import { TestBed } from '@angular/core/testing';

import { WeatherdetailService } from './weatherdetail.service';

describe('WeatherdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherdetailService = TestBed.get(WeatherdetailService);
    expect(service).toBeTruthy();
  });
});
