import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOverviewComponent } from './tour-overview.component';

describe('TourOverviewComponent', () => {
  let component: TourOverviewComponent;
  let fixture: ComponentFixture<TourOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
