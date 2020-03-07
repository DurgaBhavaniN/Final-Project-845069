import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubategoriesComponent } from './view-subategories.component';

describe('ViewSubategoriesComponent', () => {
  let component: ViewSubategoriesComponent;
  let fixture: ComponentFixture<ViewSubategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
