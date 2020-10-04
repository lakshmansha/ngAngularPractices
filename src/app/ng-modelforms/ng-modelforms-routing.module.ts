import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgModelformsComponent } from './ng-modelforms.component';


const routes: Routes = [  
  {
    path: 'forms',
    component: NgModelformsComponent,
    data: { title: "Forms Module" }    
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgModelformsRoutingModule { }
