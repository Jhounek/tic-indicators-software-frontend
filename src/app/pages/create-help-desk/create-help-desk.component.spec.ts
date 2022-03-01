import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHelpDeskComponent } from './create-help-desk.component';

describe('CreateHelpDeskComponent', () => {
  let component: CreateHelpDeskComponent;
  let fixture: ComponentFixture<CreateHelpDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHelpDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHelpDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
