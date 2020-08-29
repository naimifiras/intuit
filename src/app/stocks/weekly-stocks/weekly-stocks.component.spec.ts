import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyStocksComponent } from './weekly-stocks.component';

describe('WeeklyStocksComponent', () => {
  let component: WeeklyStocksComponent;
  let fixture: ComponentFixture<WeeklyStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
