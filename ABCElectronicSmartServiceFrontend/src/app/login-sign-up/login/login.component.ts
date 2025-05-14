import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/Api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const loginData = this.loginForm.value;

    this.apiService.login(loginData).subscribe({
      next: (response) => {
        // ✅ Store token and update login state
        this.authService.login(response.token);
        // console.log(response.token);

        this.successMessage = 'Login successful!';
        this.errorMessage = '';
        this.loginForm.reset();
        this.submitted = false;

        // ✅ Navigate to home (protected route)
        this.router.navigate(['/']);
      },
      error: () => {
        this.errorMessage = 'Invalid username or password.';
        this.successMessage = '';
      },
    });
  }
}
