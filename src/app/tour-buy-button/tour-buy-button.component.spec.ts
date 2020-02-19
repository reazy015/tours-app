import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourBuyButtonComponent } from './tour-buy-button.component';

describe('TourBuyButtonComponent', () => {
  let component: TourBuyButtonComponent;
  let fixture: ComponentFixture<TourBuyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourBuyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourBuyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
