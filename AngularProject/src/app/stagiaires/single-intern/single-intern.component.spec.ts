import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInternComponent } from './single-intern.component';

describe('SingleInternComponent', () => {
  let component: SingleInternComponent;
  let fixture: ComponentFixture<SingleInternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleInternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
