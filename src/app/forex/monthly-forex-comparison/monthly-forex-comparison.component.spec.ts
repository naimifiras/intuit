import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyForexComparisonComponent } from './monthly-forex-comparison.component';

describe('MonthlyForexComparisonComponent', () => {
  let component: MonthlyForexComparisonComponent;
  let fixture: ComponentFixture<MonthlyForexComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyForexComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyForexComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
