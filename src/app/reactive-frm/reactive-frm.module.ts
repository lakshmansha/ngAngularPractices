import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFrmsRoutingModule } from './reactive-frm-routing.module';
import { ReactiveFrmsComponent } from './reactive-frm.component';


@NgModule({
  declarations: [ReactiveFrmsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFrmsRoutingModule
  ]
})
export class ReactiveFrmsModule { }
