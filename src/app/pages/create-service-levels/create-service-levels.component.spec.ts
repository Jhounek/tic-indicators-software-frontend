import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceLevelsComponent } from './create-service-levels.component';

describe('CreateServiceLevelsComponent', () => {
  let component: CreateServiceLevelsComponent;
  let fixture: ComponentFixture<CreateServiceLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServiceLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiceLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
