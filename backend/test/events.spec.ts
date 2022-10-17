import * as chai from 'chai';
import dotenv from 'dotenv';
import { after, before, describe, it } from 'mocha';
import * as request from 'request';
import { APIServer } from '../src/APIServer';
import { EventModel } from '../src/model/events';

const expect = chai.expect;
dotenv.config();

const port = process.env.PORT || 8000;
const eventRequest: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl> = request.defaults(
  { baseUrl: `http://localhost:${port}` },
);

describe('Event controller Tests', () => {
  before(() => {
    return APIServer.start();
  });

  after(() => {
    return APIServer.stop();
  });

  const testEvent: EventModel = {
    name: 'test event' + Math.random(),
    link: 'https://example.com',
    date: new Date(),
    organizer: 'test orga',
  };

  describe('The event api', () => {
    it('should should create an event', done => {
      eventRequest.post(
        {
          body: testEvent,
          json: true,
          url: '/api/events',
        },
        (error: any, response, body) => {
          expect(response.statusCode).to.eq(200);
          expectIdenticalEvents(JSON.parse(JSON.stringify(testEvent)), response.body);
          done();
        },
      );
    });

    it('should list all events', done => {
      eventRequest.get('/api/events', { json: true }, (error, response, body) => {
        expectIdenticalEvents(
          JSON.parse(JSON.stringify(testEvent)),
          response.body.find((event: any) => event.name == testEvent.name),
        );
        done();
      });
    });
  });
});

const expectIdenticalEvents = (expected: EventModel, actual: any) => {
  for (const [key, value] of Object.entries(expected)) {
    expect(actual[key].toString()).to.eq(value);
  }
};
