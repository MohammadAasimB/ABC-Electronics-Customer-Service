import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComplaintByComplaintIdComponent } from './get-complaint-by-complaint-id.component';

describe('GetComplaintByComplaintIdComponent', () => {
  let component: GetComplaintByComplaintIdComponent;
  let fixture: ComponentFixture<GetComplaintByComplaintIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetComplaintByComplaintIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetComplaintByComplaintIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
