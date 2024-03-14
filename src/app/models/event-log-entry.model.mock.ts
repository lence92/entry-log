import { EventLogEntry } from './event-log-entry.model';

export const EVENT_LOG_MOCK_DATA: EventLogEntry[] = [
  {
    timestamp: '2021-08-01T12:00:00.000Z',
    level: 'WARNING',
    message: 'Metric 1 is above the warning threshold',
  },
  {
    timestamp: '2021-08-01T13:00:00.000Z',
    level: 'ERROR',
    message: 'Metric 1 is above the error threshold',
  },
  {
    timestamp: '2021-08-01T14:00:00.000Z',
    level: 'INFO',
    message: 'Metric 1 is back to normal',
  },
];
