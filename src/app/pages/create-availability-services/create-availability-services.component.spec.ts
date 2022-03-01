import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAvailabilityServicesComponent } from './create-availability-services.component';

describe('CreateAvailabilityServicesComponent', () => {
  let component: CreateAvailabilityServicesComponent;
  let fixture: ComponentFixture<CreateAvailabilityServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAvailabilityServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAvailabilityServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
