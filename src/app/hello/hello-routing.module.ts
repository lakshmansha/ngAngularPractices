import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './hello.component';
import { HelloResolver } from './hello.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  {
    path: 'hello',
    component: HelloComponent,
    data: { title: "Hello Module" },
    resolve: { responses: HelloResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }
