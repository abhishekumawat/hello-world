import { TestBed } from '@angular/core/testing';

import { ClientlistService } from './clientlist.service';

describe('ClientlistService', () => {
  let service: ClientlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
