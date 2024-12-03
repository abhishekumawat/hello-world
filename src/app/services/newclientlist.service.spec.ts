import { TestBed } from '@angular/core/testing';

import { NewclientlistService } from './newclientlist.service';

describe('NewclientlistService', () => {
  let service: NewclientlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewclientlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
