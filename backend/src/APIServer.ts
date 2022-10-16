import express, { Express } from 'express';
import * as http from 'http';
import { Server } from 'typescript-rest';
import { EventsController } from './controller/EventsController';
import { MongoConnector } from './MongoConnector';

export class APIServer {
  private static app: Express;
  private static server: http.Server;

  public static async start() {
    await MongoConnector.connect();

    APIServer.app = express();
    const port = process.env.PORT || 8000;
    Server.buildServices(APIServer.app, EventsController);

    APIServer.server = APIServer.app.listen(port, () => {
      console.log(`Server startet at https://localhost:${port}`);
    });
  }

  public static async stop() {
    await APIServer.server.close();
    await MongoConnector.disconnect();
  }
}
