import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggingRoutingModule } from './logging-routing.module';
import { LoggingComponent } from './logging.component';

@NgModule({
  declarations: [LoggingComponent],
  imports: [
    CommonModule,
    LoggingRoutingModule
  ]
})
export class LoggingModule { }
