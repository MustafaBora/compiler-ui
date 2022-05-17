import { TestBed } from '@angular/core/testing';

import { SubmissionsService } from './submit.service';

describe('SubmitService', () => {
  let service: SubmissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
