import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Todo } from './ITodo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  TodoList: Todo[] = [];
  todo: Todo;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.PageLoad();
  }

  PageLoad() {
    this.TodoList = this.route.snapshot.data.responses['Todos'];
  }

  updateForm(todo: Todo) {
    this.todo = todo;
  }

  rtnTodoList(todoLst: Todo[]) {
    this.TodoList = todoLst;
  }

}
