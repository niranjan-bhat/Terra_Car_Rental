import { TestBed } from '@angular/core/testing';

import { CarGeneratorService } from './car-generator.service';

describe('CarGeneratorService', () => {
  let service: CarGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
