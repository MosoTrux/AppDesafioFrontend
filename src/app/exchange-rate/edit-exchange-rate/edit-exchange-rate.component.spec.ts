import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExchangeRateComponent } from './edit-exchange-rate.component';

describe('EditExchangeRateComponent', () => {
  let component: EditExchangeRateComponent;
  let fixture: ComponentFixture<EditExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExchangeRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
