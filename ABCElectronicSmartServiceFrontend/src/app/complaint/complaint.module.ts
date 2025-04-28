import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComplaintComponent } from './book-complaint/book-complaint.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetComplaintByClientComponent } from './get-complaint-by-client/get-complaint-by-client.component';
import { GetComplaintByComplaintIdComponent } from './get-complaint-by-complaint-id/get-complaint-by-complaint-id.component';

@NgModule({
  declarations: [
    BookComplaintComponent,
    GetComplaintByClientComponent,
    GetComplaintByComplaintIdComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    BookComplaintComponent,
    GetComplaintByClientComponent,
    GetComplaintByComplaintIdComponent,
  ],
})
export class ComplaintModule {}
