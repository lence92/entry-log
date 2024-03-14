import { TestBed } from '@angular/core/testing';

import { EventLogsService } from './event-logs.service';
import { EventLogsServiceMock } from './event-logs.service.mock';

describe('EventLogsService', () => {
  let service: EventLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: EventLogsService, useClass: EventLogsServiceMock },
      ],
    });
    service = TestBed.inject(EventLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
