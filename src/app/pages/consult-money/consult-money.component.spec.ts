import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultMoneyComponent } from './consult-money.component';

describe('ConsultMoneyComponent', () => {
  let component: ConsultMoneyComponent;
  let fixture: ComponentFixture<ConsultMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
