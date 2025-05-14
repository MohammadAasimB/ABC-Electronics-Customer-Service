import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/Api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  myForm!: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      clientId: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z0-9]+$/),
        ],
      ],
      clientName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z\s]+$/),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
          ),
        ],
      ],
      address: ['', [Validators.required, Validators.minLength(5)]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
      ],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }

    const clientData = this.myForm.value;

    this.apiService.registerClient(clientData).subscribe({
      next: () => {
        this.successMessage = 'Client registered successfully!';
        this.errorMessage = '';
        this.myForm.reset();
        this.submitted = false;
      },
      error: (error) => {
        this.errorMessage = 'Registration failed. Please try again.';
        this.successMessage = '';
        console.error(error);
      },
    });
  }
}
