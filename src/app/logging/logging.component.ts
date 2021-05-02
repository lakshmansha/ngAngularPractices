import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ilogger, LoggingService } from './logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit {

  logs: Ilogger[] = [];
  level: string;
  constructor(private logService: LoggingService) { }

  ngOnInit(): void {
    this.level = environment.Logging.LogLevel;
    this.logService.getAllLogs().subscribe(data => {
      const logs = data.map(e => {
        return {
          loggerId: e.payload.doc.id,
          ...e.payload.doc.data() as Ilogger
        } as Ilogger;
      });

      this.logs = logs;
    });
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
