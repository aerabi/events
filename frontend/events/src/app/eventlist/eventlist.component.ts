import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UPCOMING_EVENTS } from '../mock-events';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css', '../app.component.css']
})
export class EventlistComponent implements OnInit {

  upcomingEvents = UPCOMING_EVENTS;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  createNewEvent() {
    this.router.navigateByUrl("createEvent");
  }

}
