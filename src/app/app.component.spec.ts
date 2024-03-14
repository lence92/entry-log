import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TableComponent } from './components/table/table.component';
import { EventLogsService } from './services/event-logs/event-logs.service';
import { EventLogsServiceMock } from './services/event-logs/event-logs.service.mock';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatTableModule,
        MatIconModule,
        HttpClientModule,
      ],
      providers: [
        { provide: EventLogsService, useClass: EventLogsServiceMock },
      ],
      declarations: [AppComponent, TimelineComponent, TableComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Event log'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Event log');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.event-log h1')?.textContent).toContain(
      'Event log'
    );
  });
});
