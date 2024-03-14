import { Observable, of } from 'rxjs';
import { EventLogEntry } from 'src/app/models/event-log-entry.model';
import { EVENT_LOG_MOCK_DATA } from 'src/app/models/event-log-entry.model.mock';

export class EventLogsServiceMock {
  getAllEventLogs(): Observable<EventLogEntry[]> {
    return of(EVENT_LOG_MOCK_DATA);
  }
}
