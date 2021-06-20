// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  EnvName: "CDEV - ENV",
  Logging: {
    IsFirebase: false,
    IsRestAPI: false,
    LogLevel: "Warn"
  },
  FireBase: {
    apiKey: "--Config--",
    authDomain: "angularbestpractices.firebaseapp.com",
    databaseURL: "https://angularbestpractices.firebaseio.com",
    projectId: "angularbestpractices",
    storageBucket: "angularbestpractices.appspot.com",
    messagingSenderId: "91046398815",
    appId: "1:91046398815:web:d45d5914e543ad543ac4ea",
    measurementId: "G-6T8HRS609F"
  },
  RestAPI: {
    LoggingUrl: "http://localhost:5000/logger"
  }
};

export const Feature = {
  Schema: false
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
