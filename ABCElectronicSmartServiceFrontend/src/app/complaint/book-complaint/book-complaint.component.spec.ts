import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComplaintComponent } from './book-complaint.component';

describe('BookComplaintComponent', () => {
  let component: BookComplaintComponent;
  let fixture: ComponentFixture<BookComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
