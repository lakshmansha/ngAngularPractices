import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostOfficeRoutingModule } from './post-office-routing.module';
import { PostOfficeComponent } from './post-office.component';
import { PostOfficeService } from './post-office.service';

@NgModule({
  declarations: [PostOfficeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostOfficeRoutingModule
  ],
  providers: [PostOfficeService]
})
export class PostOfficeModule { }
