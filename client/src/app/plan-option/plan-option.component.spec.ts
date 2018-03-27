import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanOptionComponent } from './plan-option.component';

describe('PlanOptionComponent', () => {
  let component: PlanOptionComponent;
  let fixture: ComponentFixture<PlanOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
