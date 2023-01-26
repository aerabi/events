import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UPCOMING_EVENTS } from '../mock-events';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css', '../app.component.css'],
})
export class EventlistComponent implements OnInit {
  upcomingEvents = UPCOMING_EVENTS;

  constructor(private router: Router, private service: EventsService) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
    this.loadEventsList();
  }

  createNewEvent() {
    this.router.navigateByUrl('createEvent');
  }

  loadEventsList() {
    this.service.list().subscribe(events => {
      this.upcomingEvents = events;
    });
  }
}
