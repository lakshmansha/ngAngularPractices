import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private http: HttpClient) { }

  public loadConfig() {
    return this.http.get('./assets/config/config.json')
      .toPromise()
      .then((config: any) => {

        // Enabled Option Only for Production Build.
        if (environment.production) {
          // Set EnvName to Environment via Config.json File.
          // config.json File Won't be Part of Source Code.
          if (config.EnvName != undefined) {
            environment.EnvName = config.EnvName;
          }

          if (config.IsFirebase != undefined) {
            environment.Logging.IsFirebase = config.IsFirebase;

            if (config.FireBaseAPIKey != undefined) {
              environment.FireBase.apiKey = config.FireBaseAPIKey;
            }
          }

          if (config.IsRestAPI != undefined) {
            environment.Logging.IsRestAPI = config.IsRestAPI;

            if (config.RESTLoggingUrl != undefined) {
              environment.RestAPI.LoggingUrl = config.RESTLoggingUrl;
            }
          }
        }

        if (!environment.production) {
          if (config.FireBaseAPIKey != undefined) {
            environment.FireBase.apiKey = config.FireBaseAPIKey;
          }
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

}
