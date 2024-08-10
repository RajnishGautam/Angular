import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsflowComponent } from './conditionsflow.component';

describe('ConditionsflowComponent', () => {
  let component: ConditionsflowComponent;
  let fixture: ComponentFixture<ConditionsflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionsflowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionsflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
