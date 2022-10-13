import dotenv from 'dotenv';
import express, { Express } from 'express';
import { Server } from "typescript-rest";
import { EventsController } from './controller/EventsController';
import { MongoConnector } from './MongoConnector';

dotenv.config();

MongoConnector.connect();

const app: Express = express();
const port = process.env.PORT;
Server.buildServices(app, EventsController);

app.listen(port, () => {
    console.log(`Server startet at https://localhost:${port}`);
});