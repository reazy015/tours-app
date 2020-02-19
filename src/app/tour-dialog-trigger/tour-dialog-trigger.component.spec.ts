import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDialogTriggerComponent } from './tour-dialog-trigger.component';

describe('TourDialogTriggerComponent', () => {
  let component: TourDialogTriggerComponent;
  let fixture: ComponentFixture<TourDialogTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDialogTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDialogTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
