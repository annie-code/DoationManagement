import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorNgoComponent } from './donor-ngo.component';

describe('DonorNgoComponent', () => {
  let component: DonorNgoComponent;
  let fixture: ComponentFixture<DonorNgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorNgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
