import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdonationRequestComponent } from './ddonation-request.component';

describe('DdonationRequestComponent', () => {
  let component: DdonationRequestComponent;
  let fixture: ComponentFixture<DdonationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdonationRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DdonationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
