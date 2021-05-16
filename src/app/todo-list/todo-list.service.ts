import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Todo } from './ITodo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  TodoList: Todo[] = [];

  constructor() {
    this.TodoList.push(new Todo("First Task", true));
    this.TodoList.push(new Todo("Second Task", true));
    this.TodoList.push(new Todo("Third Task", false));
  }

  getTodo(): Observable<any[]> {
    return of(this.TodoList);
  }
}
