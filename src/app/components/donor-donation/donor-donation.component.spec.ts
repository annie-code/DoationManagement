import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorDonationComponent } from './donor-donation.component';

describe('DonorDonationComponent', () => {
  let component: DonorDonationComponent;
  let fixture: ComponentFixture<DonorDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
