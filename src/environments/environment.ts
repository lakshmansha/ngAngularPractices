// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  EnvName: "CDEV - ENV",
  Logging: {
    IsFirebase: true,
    LogLevel: "Warn"
  },
  FireBase: {
    apiKey: "--Config--",
    authDomain: "angularbestpractices-a03d0.firebaseapp.com",
    databaseURL: "https://angularbestpractices-a03d0.firebaseio.com",
    projectId: "angularbestpractices-a03d0",
    storageBucket: "angularbestpractices-a03d0.appspot.com",
    messagingSenderId: "331411129042",
    appId: "1:331411129042:web:b87de2f71d73a2294c230b",
    measurementId: "G-4M3E41QWPY"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
