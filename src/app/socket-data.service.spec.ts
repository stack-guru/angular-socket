import { TestBed } from '@angular/core/testing';

import { SocketDataService } from './socket-data.service';

describe('SocketDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocketDataService = TestBed.get(SocketDataService);
    expect(service).toBeTruthy();
  });
});
