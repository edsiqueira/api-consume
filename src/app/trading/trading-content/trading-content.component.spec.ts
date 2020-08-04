import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingContentComponent } from './trading-content.component';

describe('TradingContentComponent', () => {
  let component: TradingContentComponent;
  let fixture: ComponentFixture<TradingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
