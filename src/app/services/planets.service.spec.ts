import { TestBed } from '@angular/core/testing';

import { PlanetsService } from './planets.service';
import { HttpClient } from '@angular/common/http';

describe('PlanetsService', () => {
  let service: PlanetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient, useValue: {}
        }
      ]
    });
    service = TestBed.inject(PlanetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
