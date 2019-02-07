import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectorComponent } from './single-projector.component';

describe('SingleProjectorComponent', () => {
  let component: SingleProjectorComponent;
  let fixture: ComponentFixture<SingleProjectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProjectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
