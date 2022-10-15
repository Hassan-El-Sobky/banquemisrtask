import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredintsFormComponent } from './ingredints-form.component';

describe('IngredintsFormComponent', () => {
  let component: IngredintsFormComponent;
  let fixture: ComponentFixture<IngredintsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredintsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredintsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
