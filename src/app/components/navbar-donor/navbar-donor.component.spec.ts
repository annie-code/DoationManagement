import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDonorComponent } from './navbar-donor.component';

describe('NavbarDonorComponent', () => {
  let component: NavbarDonorComponent;
  let fixture: ComponentFixture<NavbarDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
