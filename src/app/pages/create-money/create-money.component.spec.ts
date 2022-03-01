import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMoneyComponent } from './create-money.component';

describe('CreateMoneyComponent', () => {
  let component: CreateMoneyComponent;
  let fixture: ComponentFixture<CreateMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
