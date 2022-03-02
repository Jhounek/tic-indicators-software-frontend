import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultProjectComponent } from './consult-project.component';

describe('ConsultProjectComponent', () => {
  let component: ConsultProjectComponent;
  let fixture: ComponentFixture<ConsultProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
