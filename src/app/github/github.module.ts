import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { GithubService } from './github.service';


@NgModule({
  declarations: [GithubComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GithubRoutingModule
  ],
  providers: [GithubService]
})
export class GithubModule { }
