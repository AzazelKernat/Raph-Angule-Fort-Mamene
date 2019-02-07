import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProjectorsComponent } from './search-projectors.component';

describe('SearchProjectorsComponent', () => {
  let component: SearchProjectorsComponent;
  let fixture: ComponentFixture<SearchProjectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProjectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProjectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
