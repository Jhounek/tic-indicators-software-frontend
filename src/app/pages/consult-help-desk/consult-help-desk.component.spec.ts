import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultHelpDeskComponent } from './consult-help-desk.component';

describe('ConsultHelpDeskComponent', () => {
  let component: ConsultHelpDeskComponent;
  let fixture: ComponentFixture<ConsultHelpDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultHelpDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultHelpDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
