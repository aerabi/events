export interface Event {
  id: number;
  name: string;
  date: Date;
  organizer: string;
  link: string;
}

export interface EventCreationRequest {
  name: string;
  date: Date;
  organizer: string;
  link: string;
}
