import { TestBed } from '@angular/core/testing';

import { IsEmailGuard } from './is-email.guard';
import { HttpClient } from '@angular/common/http';

describe('IsEmailGuard', () => {
  let guard: IsEmailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient, useValue: {}
        },
      ]
    });
    guard = TestBed.inject(IsEmailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
