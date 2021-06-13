import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemaRoutingModule } from './schema-routing.module';
import { SchemaComponent } from './schema.component';
import { SchemaService } from './schema.service';

@NgModule({
  declarations: [SchemaComponent],
  imports: [
    CommonModule,
    SchemaRoutingModule
  ],
  providers: [SchemaService]
})
export class SchemaModule { }
