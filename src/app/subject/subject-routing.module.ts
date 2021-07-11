import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './subject.component';

const routes: Routes = [
  {
    path: 'subject',
    component: SubjectComponent,
    data: { title: "Subject Module" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
