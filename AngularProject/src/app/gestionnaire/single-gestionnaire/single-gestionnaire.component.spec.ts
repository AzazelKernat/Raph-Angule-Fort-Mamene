import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGestionnaireComponent } from './single-gestionnaire.component';

describe('SingleGestionnaireComponent', () => {
  let component: SingleGestionnaireComponent;
  let fixture: ComponentFixture<SingleGestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleGestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
