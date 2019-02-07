import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectorsListComponent } from './projectors-list.component';

describe('ProjectorsListComponent', () => {
  let component: ProjectorsListComponent;
  let fixture: ComponentFixture<ProjectorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
