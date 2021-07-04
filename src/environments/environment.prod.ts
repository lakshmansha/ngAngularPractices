export const environment = {
  production: true,
  EnvName: "",
  Logging: {
    IsFirebase: false,
    IsRestAPI: true,
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
    LoggingUrl: "https://ngangularpracticesapi.azurewebsites.net/logger"
  }
};

export const Feature = {
  Schema: true
}
