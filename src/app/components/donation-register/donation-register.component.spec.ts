import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationRegisterComponent } from './donation-register.component';

describe('DonationRegisterComponent', () => {
  let component: DonationRegisterComponent;
  let fixture: ComponentFixture<DonationRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
