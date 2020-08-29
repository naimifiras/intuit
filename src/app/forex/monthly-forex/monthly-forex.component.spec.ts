import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyForexComponent } from './monthly-forex.component';

describe('MonthlyForexComponent', () => {
  let component: MonthlyForexComponent;
  let fixture: ComponentFixture<MonthlyForexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyForexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
