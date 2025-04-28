import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/Api.service';

@Component({
  selector: 'app-book-complaint',
  templateUrl: './book-complaint.component.html',
  styleUrls: ['./book-complaint.component.css'],
})
export class BookComplaintComponent {
  complaintForm: FormGroup;
  message: string = '';

  product: string = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute
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
      clientId: ['', [Validators.required]],
      engineerId: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.apiService.addComplaint(this.complaintForm.value).subscribe({
      next: (data) => {
        console.log('✅ Data added:', data);
        alert('✅ Data added successfully!');
        this.complaintForm.reset();
      },
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.product = params.get('modelNumber')!;
      this.complaintForm.get('productModelNumber')?.setValue(this.product);
    });
  }

  // onSubmit(): void {
  //   if (this.complaintForm.valid) {
  //     const { clientId, productModelNumber, description } =
  //       this.complaintForm.value;
  //     const complaint = { description };
  //     this.apiService
  //       .bookComplaint(clientId, productModelNumber, complaint)
  //       .subscribe(
  //         (response) => {
  //           this.message = response;
  //         },
  //         (error) => {
  //           this.message = 'Failed to book complaint.';
  //         }
  //       );
  //   }
  // }
}
