import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInternsComponent } from './create-interns.component';

describe('CreateInternsComponent', () => {
  let component: CreateInternsComponent;
  let fixture: ComponentFixture<CreateInternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
