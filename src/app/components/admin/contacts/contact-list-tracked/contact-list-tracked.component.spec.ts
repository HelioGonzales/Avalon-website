import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListTrackedComponent } from './contact-list-tracked.component';

describe('ContactListTrackedComponent', () => {
  let component: ContactListTrackedComponent;
  let fixture: ComponentFixture<ContactListTrackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactListTrackedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListTrackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
