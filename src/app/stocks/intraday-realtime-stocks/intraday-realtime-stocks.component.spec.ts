import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntradayRealtimeStocksComponent } from './intraday-realtime-stocks.component';

describe('IntradayRealtimeStocksComponent', () => {
  let component: IntradayRealtimeStocksComponent;
  let fixture: ComponentFixture<IntradayRealtimeStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntradayRealtimeStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntradayRealtimeStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
