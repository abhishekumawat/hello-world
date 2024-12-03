import { TestBed } from '@angular/core/testing';

import { AllprojectService } from './allproject.service';

describe('AllprojectService', () => {
  let service: AllprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
