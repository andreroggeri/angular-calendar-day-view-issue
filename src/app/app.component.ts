import { setHours, setMinutes } from 'date-fns';

import { CalendarEvent } from 'angular-calendar';
import { Component } from '@angular/core';
import { EventColor } from 'calendar-utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static COLOR: EventColor = { primary: '#fff', secondary: '#bbb' }

  events: CalendarEvent[] = [{
    title: '10 AM EVENT',
    start: new Date(2017, 5, 26, 10),
    end: new Date(2017, 5, 26, 11),
    color: AppComponent.COLOR
  },
  {
    title: '11 AM EVENT',
    start: new Date(2017, 5, 26, 11),
    end: new Date(2017, 5, 26, 12),
    color: AppComponent.COLOR
  }]
  currentDate = new Date();
}
