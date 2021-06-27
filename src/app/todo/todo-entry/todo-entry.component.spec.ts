import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEntryComponent } from './todo-entry.component';

describe('TodoEntryComponent', () => {
  let component: TodoEntryComponent;
  let fixture: ComponentFixture<TodoEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
