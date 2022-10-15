import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngDetailsComponent } from './ing-details.component';

describe('IngDetailsComponent', () => {
  let component: IngDetailsComponent;
  let fixture: ComponentFixture<IngDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
