import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComplaintByEngineerComponent } from './get-complaint-by-engineer.component';

describe('GetComplaintByEngineerComponent', () => {
  let component: GetComplaintByEngineerComponent;
  let fixture: ComponentFixture<GetComplaintByEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetComplaintByEngineerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetComplaintByEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
