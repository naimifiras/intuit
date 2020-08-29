import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyStocksComparisonComponent } from './monthly-stocks-comparison.component';

describe('MonthlyStocksComparisonComponent', () => {
  let component: MonthlyStocksComparisonComponent;
  let fixture: ComponentFixture<MonthlyStocksComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyStocksComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyStocksComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
