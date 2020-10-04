import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFrmsComponent } from './reactive-frm.component';

describe('ReactiveFrmsComponent', () => {
  let component: ReactiveFrmsComponent;
  let fixture: ComponentFixture<ReactiveFrmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFrmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFrmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
