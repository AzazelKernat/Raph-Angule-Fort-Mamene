import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnairesListComponent } from './gestionnaires-list.component';

describe('GestionnairesListComponent', () => {
  let component: GestionnairesListComponent;
  let fixture: ComponentFixture<GestionnairesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionnairesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnairesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
