import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialFormFlowComponent } from './initial-form-flow.component';

describe('InitialFormFlowComponent', () => {
  let component: InitialFormFlowComponent;
  let fixture: ComponentFixture<InitialFormFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialFormFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialFormFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
