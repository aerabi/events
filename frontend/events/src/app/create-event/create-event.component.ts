import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css', '../app.component.css'],
})
export class CreateEventComponent implements OnInit {
  eventName = '';
  eventOrganizer = '';
  eventLink = '';
  eventDate = '';
  eventTime = '';

  constructor(private router: Router) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  createNewEvent() {
    //TODO: implement backend call / call to state management here
    this.router.navigateByUrl('');
  }
}
