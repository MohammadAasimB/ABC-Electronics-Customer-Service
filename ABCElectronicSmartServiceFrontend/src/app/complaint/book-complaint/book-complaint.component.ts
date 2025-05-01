import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/Api.service';

@Component({
  selector: 'app-book-complaint',
  templateUrl: './book-complaint.component.html',
  styleUrls: ['./book-complaint.component.css'],
})
export class BookComplaintComponent implements OnInit {
  complaintForm: FormGroup;
  message: string = '';
  clientId: string = 'client001';
  product: string = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.complaintForm = this.fb.group({
      complaintName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      productModelNumber: [
        { value: '', disabled: true },
        [Validators.required],
      ],
      clientId: [{ value: '', disabled: true }, [Validators.required]],
      resolvedDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.product = params.get('modelNumber')!;
      this.complaintForm.get('productModelNumber')?.setValue(this.product);
      this.complaintForm.get('clientId')?.setValue(this.clientId);
    });
  }

  onSubmit(): void {
    if (this.complaintForm.valid) {
      const formValues = this.complaintForm.getRawValue(); // Use getRawValue to get all values including disabled ones
      const clientId = formValues.clientId;
      const productModelNumber = formValues.productModelNumber;
      const dateOfComplaint = new Date().toISOString().split('T')[0]; // Set the current date

      // Calculate priority based on the difference between resolvedDate and dateOfComplaint
      const resolvedDate = new Date(formValues.resolvedDate);
      const dateOfComplaintDate = new Date(dateOfComplaint);
      const priority = Math.floor(
        (resolvedDate.getTime() - dateOfComplaintDate.getTime()) /
          (1000 * 60 * 60 * 24)
      );

      const complaint = {
        complaintName: formValues.complaintName,
        status: 'Open', // Set the status manually as it's not part of the form
        resolvedDate: formValues.resolvedDate,
        dateOfComplaint: dateOfComplaint,
        priority: priority,
      };

      this.apiService
        .bookComplaint(clientId, productModelNumber, complaint)
        .subscribe({
          next: (data) => {
            console.log('✅ Data added:', data);
            // alert('✅ Data added successfully!');
            this.complaintForm.reset();

            alert(
              `✅ Data added successfully!\nComplaint Name: ${complaint.complaintName}\nProduct Model Number: ${productModelNumber}\nResolved Date: ${complaint.resolvedDate}`
            );
            this.complaintForm.reset();
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error('Error booking complaint', error);
          },
        });
    }

    // this.router.navigate(['/getComplaintById', complaintId]);
  }
}
