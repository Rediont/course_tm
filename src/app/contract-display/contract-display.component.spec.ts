import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDisplayComponent } from './contract-display.component';

describe('ContractDisplayComponent', () => {
  let component: ContractDisplayComponent;
  let fixture: ComponentFixture<ContractDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
