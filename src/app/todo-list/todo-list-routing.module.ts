import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoListComponent,
    data: { title: "Todo List Module" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
