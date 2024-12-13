import { TestBed } from '@angular/core/testing';

import { AdminnService } from './adminn.service';

describe('AdminnService', () => {
  let service: AdminnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
