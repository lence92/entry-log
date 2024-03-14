import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventLogEntry } from './models/event-log-entry.model';
import { EventLogsService } from './services/event-logs/event-logs.service';
import { Subscription, take, tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Event log';
  dataSource: MatTableDataSource<EventLogEntry> = new MatTableDataSource();
  eventLogsSubscription!: Subscription;
  selectedRow: string = '';
  selectedEntry: string = '';

  constructor(private eventLogsService: EventLogsService) {}

  ngOnInit(): void {
    this.eventLogsSubscription = this.eventLogsService
      .getAllEventLogs()
      .pipe(
        take(1),
        tap((logs) => {
          this.dataSource = new MatTableDataSource(logs);
        })
      )
      .subscribe();
  }

  setSelectedRow(e: string) {
    this.selectedRow = e;
  }

  setSelectedEntry(e: string) {
    this.selectedEntry = e;
  }

  ngOnDestroy(): void {
    this.eventLogsSubscription.unsubscribe();
  }
}
