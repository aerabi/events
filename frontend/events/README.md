# Events

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## How frontend was implemented

- Setup environment
  - Ensure that node / npm is installed
- Install angular cli `npm install -g @angular/cli`
- Create app `ng new events`
  - Add routing yes
  - Use css
- Generate eventlist component `ng generate component eventlist`
  - Add the component to the app shell in `app.components.html`
- Add datamodel (mock for now)
  - Define type in `event.ts`
  - Define mock data in `mock-events.ts`
- Create a list with the mock data in `eventlist.component.html`
  - The data for the component is defined in `eventlist.component.ts` (a reference to our mock data for now)
- Add some basic styling for the event list in `eventlist.component.css`
