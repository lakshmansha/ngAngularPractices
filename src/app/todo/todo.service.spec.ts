import { TestBed } from '@angular/core/testing';
import { Todo } from './ITodo.interface';

import { TodoService } from './todo.service';

describe('TodoListService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('tasks should be empty', () => {
    localStorage.removeItem('todoList');
    service.getTodo().subscribe((todo: Todo[]) => {
      expect(todo).toEqual([]);
    });
  });

  it('tasks should not be empty', () => {
    const todo = new Todo('Task', false);
    const todoLst = [];
    todoLst.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todoLst));
    service.getTodo().subscribe((todo) => {
      expect(todo.length).toEqual(todoLst.length);
    });
  });
});
