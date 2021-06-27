import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo.component';
import { TodoResolver } from './todo.resolver';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent,
    data: { title: "Todo List Module" },
    resolve: { responses: TodoResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
