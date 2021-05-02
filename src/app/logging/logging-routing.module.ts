import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggingComponent } from './logging.component';
import { LoggerResolver } from './logger.resolver';

const routes: Routes = [
  {
    path: 'logging',
    component: LoggingComponent,
    data: { title: "Logger Module" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggingRoutingModule { }
