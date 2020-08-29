import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyStocksComponent } from './monthly-stocks.component';

describe('MonthlyStocksComponent', () => {
  let component: MonthlyStocksComponent;
  let fixture: ComponentFixture<MonthlyStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
