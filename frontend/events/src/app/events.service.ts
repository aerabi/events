import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event, EventCreationRequest } from './Event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  public create(event: EventCreationRequest): Observable<Event> {
    return this.http.post<Event>('/api/events', event);
  }

  public list(): Observable<Event[]> {
    return this.http.get<Event[]>('/api/events');
  }
}
