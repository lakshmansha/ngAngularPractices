import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from '../subject/subject.component';
import { SubjectOneComponent } from './subject-one/subject-one.component';
import { SubjectTwoComponent } from './subject-two/subject-two.component';

import { SubjectService } from './subject.service';

@NgModule({
  declarations: [SubjectComponent, SubjectOneComponent, SubjectTwoComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ],
  providers: [
    SubjectService
  ]
})
export class SubjectModule { }
