import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAdresseComponent } from './single-adresse.component';

describe('SingleAdresseComponent', () => {
  let component: SingleAdresseComponent;
  let fixture: ComponentFixture<SingleAdresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAdresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
