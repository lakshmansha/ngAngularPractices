import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTwoComponent } from './subject-two.component';

describe('SubjectTwoComponent', () => {
  let component: SubjectTwoComponent;
  let fixture: ComponentFixture<SubjectTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
