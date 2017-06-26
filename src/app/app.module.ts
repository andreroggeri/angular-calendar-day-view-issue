import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'angular-calendar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
