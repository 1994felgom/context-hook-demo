# context-hook-demo

The goal of this work is to show how the new API can be used to create something very similar to React Redux. Here, both useContext and useReducer are used together in order to mimic the developer experience with Redux. Although it is not possible to integrate with something like Redux Saga or Thunk, this solution is much simpler, easier to integrate and use, and it is made of React only. You can find the main piece of code at `shared/store.js`.

## `npm start`

To run the app, by default, at [http://localhost:3000](http://localhost:3000) in development mode.

## `npm test`

To launch the test runner in watch mode.

## `npm run build`

To build the app for production to the `build` folder.
