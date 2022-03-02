import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultServicesLevelsComponent } from './consult-services-levels.component';

describe('ConsultServicesLevelsComponent', () => {
  let component: ConsultServicesLevelsComponent;
  let fixture: ComponentFixture<ConsultServicesLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultServicesLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultServicesLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
