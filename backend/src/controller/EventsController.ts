import { GET, Path, POST } from 'typescript-rest';
import Event, { EventModel } from '../model/events';

@Path('/api/events')
export class EventsController {
  public constructor() {
    console.log('Events controller created');
  }

  @GET
  listAllEvents(): Promise<Array<EventModel>> {
    return Event.find({}).exec();
  }

  @POST
  createNewEvent(newEvent: EventModel): Promise<EventModel> {
    return Event.create(newEvent);
  }
}
