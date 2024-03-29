import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubComponent } from './github.component';

const routes: Routes = [
  {
    path: 'github',
    component: GithubComponent,
    data: { title: "Github Module" },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
