import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectorComponent } from './create-projector.component';

describe('CreateProjectorComponent', () => {
  let component: CreateProjectorComponent;
  let fixture: ComponentFixture<CreateProjectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
