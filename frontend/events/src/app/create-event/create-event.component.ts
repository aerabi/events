import { Component, OnInit } from '@angular/core';
import { EventCreationRequest } from '../Event';
import { EventsService } from '../events.service';
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

  constructor(private router: Router, private service: EventsService) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  createNewEvent() {
    const event: EventCreationRequest = {
      name: this.eventName,
      organizer: this.eventOrganizer,
      link: this.eventLink,
      date: new Date(`${this.eventDate} ${this.eventTime}`),
    };
    this.service.create(event).subscribe(createdEvent => {
      console.log(createdEvent);
      this.router.navigateByUrl('');
    });
  }
}
