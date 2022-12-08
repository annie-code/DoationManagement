import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDonationComponent } from './navbar-donation.component';

describe('NavbarDonationComponent', () => {
  let component: NavbarDonationComponent;
  let fixture: ComponentFixture<NavbarDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
