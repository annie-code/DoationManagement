import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoNotificationComponent } from './ngo-notification.component';

describe('NgoNotificationComponent', () => {
  let component: NgoNotificationComponent;
  let fixture: ComponentFixture<NgoNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
