import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntradayRealtimeForexComponent } from './intraday-realtime-forex.component';

describe('IntradayRealtimeForexComponent', () => {
  let component: IntradayRealtimeForexComponent;
  let fixture: ComponentFixture<IntradayRealtimeForexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntradayRealtimeForexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntradayRealtimeForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
