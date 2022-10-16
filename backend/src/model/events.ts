import * as mongoose from 'mongoose';
import { Model } from 'mongoose';

type EventType = EventModel & mongoose.Document;

export interface EventModel {
  name: string;
  link: string;
  date: Date;
  organizer: string;
}

const EventSchema = new mongoose.Schema(
  {
    name: String,
    link: String,
    date: Date,
    organizer: String,
  },
  { timestamps: true },
);

const Event: Model<EventType> = mongoose.model<EventType>('Event', EventSchema);
export default Event;
