This backend depends on a mongodb server running locally on port 27017 (can be configured in .env).

To start one you can for example use docker:

```
docker run -d -p 27017:27017 --name test-mongo mongo:latest
```

## How the backend was implemented

- Create npm app with npm init
- Add needed dependencies
  - Production dependencies
    - `npm i dotenv express mongoose typescript-rest`
    - dotenv - allows different .env configurations for different environments
    - express - express web server
    - mongoose - mongodb connection
    - typescript-rest - framework for express to create web controllers in a simple way with annotations
  - Dev dependencies
    - `npm i --save-dev chai concurrently cross-env mocha nodemon request typescript @types/chai @types/express @types/mocha @types/node @types/request`
    - chai, mocha, request, concurrently, cross-env used for automated testing
    - typescript - used for typescript support
    - nodemon - used for auto reloading while developing
- Create npm scripts for build, run and development
  - npm run build - runs the typescript compiler
  - npm run start - runs the compiler output, starts the webserver
  - npm run dev - runs the compiler output and recompiles everything on every change (live refresh)
- Implement an entrypoint index.ts for the application
  - Here we start the express server and connect to mongodb via mongoose
  - The logic is split in APIServer.ts and MongoConnector.ts
  - Different environment variables are made available in `process.env.` from the .env file by executing `dotenv.config();`
- Create a typescript config by running `nxp tsc --init`
  - Edit the created tsconfig.json
  - enable `emitDecoratorMetadata` and `experimentalDecorators`, this is needed by typescript-rest
  - set `outDir` to "./dist" so that the compiled sources are put in seperate directory
- Implement the mongoose model for the event entity in `events.ts`
  - This defines how an event looks like and makes the mongodb collection for events available
- Implement the first controller (/api/events) to fetch and create events
  - typescript-rest is scanning for all classes annotated with @Path and creates routes in express for them. Different http methods can be implemented in methods annotated with @GET / @POST etc.
  - As a first simple implementation, just pass the received object to the mongodb model we created earlier (in a more sophisticated application you would do input validation and mapping between the api object and the database entity)
