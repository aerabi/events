import * as mongoose from 'mongoose';
import { Model } from 'mongoose';

type EventType = EventModel & mongoose.Document;

export interface EventModel {
    id: string;
    name: string;
    link: string;
    date: Date;
    organizer: string;
};

const EventSchema = new mongoose.Schema({
    id: String,
    name: String,
    link: String,
    date: Date,
    organizer: String
}, { timestamps: true });

const Event: Model<EventType> = mongoose.model<EventType>('Event', EventSchema);
export default Event;