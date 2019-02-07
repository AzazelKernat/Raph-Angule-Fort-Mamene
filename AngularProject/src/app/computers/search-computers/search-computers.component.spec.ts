import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComputersComponent } from './search-computers.component';

describe('SearchComputersComponent', () => {
  let component: SearchComputersComponent;
  let fixture: ComponentFixture<SearchComputersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComputersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
