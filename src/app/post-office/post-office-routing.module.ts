import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostOfficeComponent } from './post-office.component';

const routes: Routes = [
  {
    path: 'postoffice',
    component: PostOfficeComponent,
    data: { title: "Pin Code Module" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostOfficeRoutingModule { }
