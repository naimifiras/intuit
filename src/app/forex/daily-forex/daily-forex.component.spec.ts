import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyForexComponent } from './daily-forex.component';

describe('DailyForexComponent', () => {
  let component: DailyForexComponent;
  let fixture: ComponentFixture<DailyForexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyForexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
