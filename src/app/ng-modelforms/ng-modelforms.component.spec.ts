import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelformsComponent } from './ng-modelforms.component';

describe('NgModelformsComponent', () => {
  let component: NgModelformsComponent;
  let fixture: ComponentFixture<NgModelformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModelformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
