import { TestBed } from '@angular/core/testing';

import { DireccionIPService } from './direccion-ip.service';

describe('DireccionIPService', () => {
  let service: DireccionIPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DireccionIPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
