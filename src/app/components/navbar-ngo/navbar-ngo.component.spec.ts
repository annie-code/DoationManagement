import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNgoComponent } from './navbar-ngo.component';

describe('NavbarNgoComponent', () => {
  let component: NavbarNgoComponent;
  let fixture: ComponentFixture<NavbarNgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarNgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
