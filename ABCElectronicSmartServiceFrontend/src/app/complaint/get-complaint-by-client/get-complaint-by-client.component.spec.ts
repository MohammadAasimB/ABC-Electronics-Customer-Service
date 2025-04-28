import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComplaintByClientComponent } from './get-complaint-by-client.component';

describe('GetComplaintByClientComponent', () => {
  let component: GetComplaintByClientComponent;
  let fixture: ComponentFixture<GetComplaintByClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetComplaintByClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetComplaintByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
