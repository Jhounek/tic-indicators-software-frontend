import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultAvailabilityServicesComponent } from './consult-availability-services.component';

describe('ConsultAvailabilityServicesComponent', () => {
  let component: ConsultAvailabilityServicesComponent;
  let fixture: ComponentFixture<ConsultAvailabilityServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultAvailabilityServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultAvailabilityServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
