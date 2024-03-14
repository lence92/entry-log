import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LEVEL } from 'src/app/enums/level';
import { EventLogEntry } from 'src/app/models/event-log-entry.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() dataSource: MatTableDataSource<EventLogEntry> =
    new MatTableDataSource();
  @Input() selectedRow: string = '';
  @Output() onRowHover: EventEmitter<string> = new EventEmitter<string>();

  LEVEL = LEVEL;

  displayedColumns: string[] = ['timestamp', 'level', 'message'];
}
