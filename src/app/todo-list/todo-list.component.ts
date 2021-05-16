import { Component, OnInit } from '@angular/core';
import { Todo } from './ITodo.interface';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  TodoList: Todo[] = [];

  constructor(private resolverService: TodoListService) { }

  ngOnInit(): void {
    this.PageLoad();
  }

  PageLoad() {
    this.resolverService.getTodo().subscribe(data => {
      this.TodoList = data;
    });
  }

}
