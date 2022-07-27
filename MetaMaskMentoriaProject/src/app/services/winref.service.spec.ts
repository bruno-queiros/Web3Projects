import { TestBed } from '@angular/core/testing';

import { WinRefService } from './winref.service';

describe('WinrefService', () => {
  let service: WinRefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinRefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
