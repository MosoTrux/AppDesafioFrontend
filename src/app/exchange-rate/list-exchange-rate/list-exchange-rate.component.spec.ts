import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExchangeRateComponent } from './list-exchange-rate.component';

describe('ListExchangeRateComponent', () => {
  let component: ListExchangeRateComponent;
  let fixture: ComponentFixture<ListExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExchangeRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
