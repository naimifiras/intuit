import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyStocksComponent } from './daily-stocks.component';

describe('DailyStocksComponent', () => {
  let component: DailyStocksComponent;
  let fixture: ComponentFixture<DailyStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
