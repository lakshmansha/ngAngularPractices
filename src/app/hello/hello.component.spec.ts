import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HelloComponent } from './hello.component';
import { HelloService } from './hello.service';
import { HelloResolver } from './hello.resolver';
import { ActivatedRoute } from '@angular/router';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let heroResolver: HelloResolver;
  let route: ActivatedRoute;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [HelloComponent],
      providers: [
        HelloService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: { responses: { Data: [], Status: [] } } } },
        },
        HelloResolver
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
