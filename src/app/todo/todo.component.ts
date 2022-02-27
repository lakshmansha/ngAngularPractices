import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Todo } from './ITodo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  TodoList: Todo[] = [];
  todo: Todo;

  constructor(private route: ActivatedRoute) {
  }
  
  //#region Life-Cycle Hooks

  ngOnChanges(changes: SimpleChanges): void {
    console.log('TodoComponent=> ngAfterContentInit.');
  }
  ngDoCheck(): void {
    console.log('TodoComponent=> ngDoCheck.');
  }
  ngAfterViewInit(): void {
    console.log('TodoComponent=> ngAfterViewInit.');
  }
  ngAfterViewChecked(): void {
    console.log('TodoComponent=> ngAfterViewChecked.');
  }
  ngAfterContentInit(): void {
    console.log('TodoComponent=> ngAfterContentInit.');
  }
  ngAfterContentChecked(): void {
    console.log('TodoComponent=> ngAfterContentChecked.');
  }
  ngOnDestroy(): void {
    console.log('TodoComponent=> ngOnDestroy.');
  }

  ngOnInit(): void {
    this.PageLoad();
  }
  
  //#endregion

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
