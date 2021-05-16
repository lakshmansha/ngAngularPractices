import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { TodoListService } from './todo-list.service';
import { TodoListResolver } from './todo-list.resolver';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule
  ],
  providers: [TodoListService, TodoListResolver]
})
export class TodoListModule { }
