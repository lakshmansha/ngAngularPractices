import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgModelformsRoutingModule } from './ng-modelforms-routing.module';
import { NgModelformsComponent } from './ng-modelforms.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NgModelformsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgModelformsRoutingModule
  ]
})
export class NgModelformsModule { }
