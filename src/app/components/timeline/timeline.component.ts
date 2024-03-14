import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { EventLogEntry } from 'src/app/models/event-log-entry.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnChanges {
  @Input() logs: EventLogEntry[] = [];
  @Input() selectedEntry: string = '';
  @Output() onEntryHover: EventEmitter<string> = new EventEmitter<string>();

  timelineMinutes: Date[] = [];

  ngOnChanges(): void {
    if (this.logs.length === 0) return;

    let startLogDate = new Date(this.logs[0].timestamp);
    let endLogDate = new Date(this.logs[this.logs.length - 1].timestamp);

    let diff = endLogDate.getTime() - startLogDate.getTime();

    const diffInMinutes: number = Math.ceil(diff / (1000 * 60)) + 1;
    this.timelineMinutes = Array(diffInMinutes)
      .fill(startLogDate)
      .map((date: Date, i, array) => {
        if (i > 0) {
          const newDate: Date = new Date(array[i - 1].getTime());
          newDate.setMinutes(newDate.getMinutes() + i);
          return newDate;
        } else {
          return date;
        }
      });
  }
}
