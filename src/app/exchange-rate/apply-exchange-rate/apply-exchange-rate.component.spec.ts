import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyExchangeRateComponent } from './apply-exchange-rate.component';

describe('ApplyExchangeRateComponent', () => {
  let component: ApplyExchangeRateComponent;
  let fixture: ComponentFixture<ApplyExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyExchangeRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
