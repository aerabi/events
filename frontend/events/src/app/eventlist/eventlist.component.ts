import { Component, OnInit } from '@angular/core';
import { UPCOMING_EVENTS } from '../mock-events';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  upcomingEvents = UPCOMING_EVENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
