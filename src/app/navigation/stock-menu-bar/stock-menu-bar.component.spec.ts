import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMenuBarComponent } from './stock-menu-bar.component';

describe('StockMenuBarComponent', () => {
  let component: StockMenuBarComponent;
  let fixture: ComponentFixture<StockMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
