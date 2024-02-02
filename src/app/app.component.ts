import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CalendarComponent } from "./calendar/calendar.component";
import { OrganizerComponent } from "./organizer/organizer.component";
import { SelectorComponent } from "./selector/selector.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CalendarComponent, OrganizerComponent, SelectorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
