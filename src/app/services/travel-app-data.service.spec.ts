import { TestBed } from '@angular/core/testing';

import { TravelAppDataService } from './travel-app-data.service';

describe('TravelAppDataService', () => {
  let service: TravelAppDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelAppDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
