import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAquoteComponent } from './get-aquote.component';

describe('GetAquoteComponent', () => {
  let component: GetAquoteComponent;
  let fixture: ComponentFixture<GetAquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
