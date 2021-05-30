import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Todo } from './ITodo.interface';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  //#region Entry Variables

  view: string;
  entryForm: FormGroup;
  todoId: string;

  //#endregion

  TodoList: Todo[] = [];

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private service: TodoListService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.PageLoad();
  }

  PageLoad() {
    this.TodoList = this.route.snapshot.data.responses['Todos'];
  }

  //#region Add Todo Variables

  createForm() {
    this.view = "Add";
    this.entryForm = this.formBuilder.group({
      Task: ['', Validators.required],
      IsCompleted: [false],
    });
  }

  resetForm() {
    this.todoId = "";
    this.view = "Add";
    this.entryForm.reset();
  }

  updateForm(todo: Todo) {
    this.todoId = todo.Id;
    this.view = "Update";
    this.entryForm.setValue({
      Task: todo.Task,
      IsCompleted: todo.IsCompleted
    });
  }

  Submit() {
    const todo$ =
      this.todoId !== '' && this.todoId
        ? this.service.updateTodo(this.todoId, this.entryForm.value)
        : this.service.addTodo(this.entryForm.value);
    todo$
      .subscribe(
        (todos) => {
          this.TodoList = todos;
          alert(`${this.view} Successfully`);
          this.resetForm();
        },
        (error) => {
          console.debug(`Todo Entry error: ${error}`);
        }
      );
  }

  //#endregion

}
