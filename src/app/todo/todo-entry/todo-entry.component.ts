import { AfterContentChecked, AfterContentInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from '../ITodo.interface';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.scss']
})
export class TodoEntryComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked {
  //#region Input Variables

  @Input() todo: Todo;
  @Output() todosEvent = new EventEmitter<Todo[]>();

  //#endregion

  //#region Entry Variables

  view: string;
  entryForm: FormGroup;
  todoId: string;

  //#endregion

  constructor(private formBuilder: FormBuilder, private service: TodoService) {
    this.createForm();
  }
  
  //#region Life-Cycle Hooks

  ngOnInit(): void {
    console.log("TodoEntryComponent=> ngOnInit");
  }

  ngOnChanges(): void {
    console.log("TodoEntryComponent=> ngOnChanges");
    if (this.todo !== undefined && this.todo !== null) {
      this.updateForm(this.todo);
    } else {
      this.resetForm();
    }
  }  

  ngAfterContentInit(): void {
    console.log("TodoEntryComponent=> ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("TodoEntryComponent=> ngAfterContentChecked");
  }

  //#endregion

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
          alert(`${this.view} Successfully`);
          this.resetForm();

          //Need to Pass TodoList to Master Component
          this.todosEvent.emit(todos);
        },
        (error) => {
          console.debug(`Todo Entry error: ${error}`);
        }
      );
  }

  //#endregion

}
