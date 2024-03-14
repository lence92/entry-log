import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EventLogEntry } from '../../models/event-log-entry.model';

const BASE_URL = 'http://localhost:8000';

@Injectable({
  providedIn: 'root',
})
export class EventLogsService {
  constructor(private http: HttpClient) {}

  getAllEventLogs(): Observable<EventLogEntry[]> {
    const url: string = BASE_URL + '/logs';
    return this.http.get<EventLogEntry[]>(url);
  }
}
