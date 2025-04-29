import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComplaintAndGetClientComponent } from './get-complaint-and-get-client.component';

describe('GetComplaintAndGetClientComponent', () => {
  let component: GetComplaintAndGetClientComponent;
  let fixture: ComponentFixture<GetComplaintAndGetClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetComplaintAndGetClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetComplaintAndGetClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
