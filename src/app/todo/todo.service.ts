import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Todo, ITodo } from './ITodo.interface';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  TodoList: Todo[] = [];

  constructor() {
    this.getStorage();
  }

  getTodo(): Observable<Todo[]> {
    this.getStorage();
    return of(this.TodoList);
  }

  buildTodo(todoContext: ITodo) {
    const todo = new Todo(todoContext.Task, todoContext.IsCompleted);
    return todo;
  }

  addTodo(todoContext: Todo): Observable<Todo[]> {
    const todoItem = this.buildTodo(todoContext);
    this.TodoList.push(todoItem);
    this.setStorage(this.TodoList);
    return of(this.TodoList);
  }

  updateTodo(id: string, todoContext: Todo): Observable<Todo[]> {
    const index = this.TodoList.findIndex(x => x.Id === id);

    const todoItem = this.buildTodo(todoContext);
    if (index > -1) {
      this.TodoList.splice(index, 1, todoItem);
    }
    // this.TodoList.push(todoItem);

    this.setStorage(this.TodoList);
    return of(this.TodoList);
  }

  setStorage(todos: Todo[]) {
    const todoJson = JSON.stringify(todos);
    localStorage.setItem('todoList', todoJson);
  }

  getStorage() {
    const todos = localStorage.getItem('todoList');
    this.TodoList = todos ? JSON.parse(todos) : [];
  }
}
