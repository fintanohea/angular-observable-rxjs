import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcopmComponent } from './formcopm.component';

describe('FormcopmComponent', () => {
  let component: FormcopmComponent;
  let fixture: ComponentFixture<FormcopmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcopmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcopmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
