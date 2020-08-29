import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyForexComponent } from './weekly-forex.component';

describe('WeeklyForexComponent', () => {
  let component: WeeklyForexComponent;
  let fixture: ComponentFixture<WeeklyForexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyForexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
