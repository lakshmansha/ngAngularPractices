import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoggingService, LogLevel } from './logging/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private logService: LoggingService) { }
  title = 'ngAngularPractices';

  ngOnInit() {
    console.log(environment.Logging.LogLevel);
    this.logService.level = LogLevel[environment.Logging.LogLevel];
    console.log(this.logService.level);
    this.logService.info('Connected Logging with FireBase');
  }
}
