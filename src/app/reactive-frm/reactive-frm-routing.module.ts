import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFrmsComponent } from './reactive-frm.component';

const routes: Routes = [  
  {
    path: 'reactive',
    component: ReactiveFrmsComponent,
    data: { title: "Reactive Forms Module" }    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFrmsRoutingModule { }
