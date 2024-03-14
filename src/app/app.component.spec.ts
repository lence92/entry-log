import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TableComponent } from './components/table/table.component';
import { EventLogsService } from './services/event-logs/event-logs.service';
import { EventLogsServiceMock } from './services/event-logs/event-logs.service.mock';
import { of } from 'rxjs';
import { EVENT_LOG_MOCK_DATA } from './models/event-log-entry.model.mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let eventLogService: EventLogsServiceMock;

  function createComponent(): void {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  beforeEach(() => {
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
    });

    eventLogService = TestBed.inject(EventLogsService) as EventLogsServiceMock;
  });

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

  it('should get all the logs from server', () => {
    spyOn(eventLogService, 'getAllEventLogs').and.returnValue(
      of(EVENT_LOG_MOCK_DATA)
    );

    createComponent();

    expect(eventLogService.getAllEventLogs).toHaveBeenCalled();

    expect(component.dataSource.data).toBe(EVENT_LOG_MOCK_DATA);
  });

  it('should set selected row', () => {
    createComponent();

    component.setSelectedRow(EVENT_LOG_MOCK_DATA[0].timestamp);

    expect(component.selectedRow).toBe(EVENT_LOG_MOCK_DATA[0].timestamp);
  });

  it('should set selected entry', () => {
    createComponent();

    component.setSelectedEntry(EVENT_LOG_MOCK_DATA[0].timestamp);

    expect(component.selectedEntry).toBe(EVENT_LOG_MOCK_DATA[0].timestamp);
  });
});
