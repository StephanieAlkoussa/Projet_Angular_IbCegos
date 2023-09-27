import { TestBed } from '@angular/core/testing';

import { AuthantificationService } from './authantification.service';

describe('AuthantificationService', () => {
  let service: AuthantificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthantificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
