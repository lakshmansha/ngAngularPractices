import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HelloModule } from './hello/hello.module';
import { NgModelformsModule } from './ng-modelforms/ng-modelforms.module';
import { ReactiveFrmsModule } from './reactive-frm/reactive-frm.module';
import { LoggingModule } from './logging/logging.module';
import { TodoModule } from './todo/todo.module';
import { SchemaModule } from './schema/schema.module';
import { SubjectModule } from './subject/subject.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';
import { AppConfigService } from './core/app-config/app-config.service';
import { LoggingService } from './logging/logging.service';

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
    BlockUIModule.forRoot(), // Import BlockUIModule
    BlockUIHttpModule.forRoot({
      blockAllRequestsInProgress: true
    }), // Import Block UI Http Module
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.FireBase),
    AngularFirestoreModule,
    CoreModule,
    SharedModule,
    HelloModule,
    NgModelformsModule,
    ReactiveFrmsModule,
    LoggingModule,
    TodoModule,
    SchemaModule,
    SubjectModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfigService],
      multi: true
    },
    LoggingService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
