import { TestBed } from '@angular/core/testing';

import { UseMetaMaskService } from './useMetaMask.service';

describe('UseMetaMaskService', () => {
  let service: UseMetaMaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseMetaMaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
