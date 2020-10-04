import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { HelloModule } from './hello/hello.module';
import { NgModelformsModule } from './ng-modelforms/ng-modelforms.module';
import { ReactiveFrmsModule } from './reactive-frm/reactive-frm.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppConfigService } from './app-config.service';

export function initConfig(appConfigService: AppConfigService) {
  return () => appConfigService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HelloModule,
    NgModelformsModule,
    ReactiveFrmsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [ AppConfigService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
