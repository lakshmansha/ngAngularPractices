import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello.component';

import { HelloService } from './hello.service';

@NgModule({
  declarations: [HelloComponent],
  imports: [
    CommonModule,
    HelloRoutingModule
  ],
  providers: [
    HelloService
  ]
})
export class HelloModule { }
