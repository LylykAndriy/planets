import { TestBed } from '@angular/core/testing';

import { IsEmailGuard } from './is-email.guard';

describe('IsEmailGuard', () => {
  let guard: IsEmailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsEmailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
