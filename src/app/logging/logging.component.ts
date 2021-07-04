import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ilogger, logger, LoggingService } from './logging.service';

import { ModelMapper } from '../core/mapper';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit {

  logs: logger[] = [];
  apilogs: logger[] = [];
  level: string;
  FireBase: boolean;
  RestAPI: boolean;
  constructor(private logService: LoggingService) { }

  ngOnInit(): void {
    this.level = environment.Logging.LogLevel;
    this.PageLoad();
  }

  PageLoad() {
    this.FireBase = environment.Logging.IsFirebase;
    this.RestAPI = environment.Logging.IsRestAPI;
    if (environment.Logging.IsFirebase) {
      this.logService.getAllFireBaseLogs().subscribe(data => {
        const logs = data.map(e => {
          return {
            loggerId: e.payload.doc.id,
            ...e.payload.doc.data() as Ilogger
          } as Ilogger;
        });

        this.logs = logs;
      });
    } else if (environment.Logging.IsRestAPI) {
      this.logService.getAllRestLogs().subscribe(data => {
        const logs = data.map(e => {
          const rtnItem = new ModelMapper(logger).map(e);
          return rtnItem;
          // return {
          //   loggerId: e['_id'],
          //   ...e as logger
          // } as logger;
        });

        this.apilogs = logs;
      });
    }
  }

  LogError() {
    try {
      throw new Error('Logging the Error on String');
    } catch (err) {
      this.logService.error(err.message, err);
    }
  }

  LogWarn() {
    this.logService.warn('Logging the Warn on String');
  }

  LogInfo() {
    this.logService.info('Logging the Info on String');
  }

  LogFatal() {
    try {
      throw new Error('Logging the Fatal on String');
    } catch (err) {
      this.logService.fatal(err.message, err);
    }
  }

}
