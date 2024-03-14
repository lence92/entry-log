import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TimelineComponent } from './components/timeline/timeline.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [AppComponent, TimelineComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
