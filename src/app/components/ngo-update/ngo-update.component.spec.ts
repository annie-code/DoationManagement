import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoUpdateComponent } from './ngo-update.component';

describe('NgoUpdateComponent', () => {
  let component: NgoUpdateComponent;
  let fixture: ComponentFixture<NgoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
