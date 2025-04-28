import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/Api.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  myForm: FormGroup;
  submittedData: any;
  data: any;
  // ApiService: any;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private api: ApiService,
    private router: Router,
    private apiService: ApiService
  ) {
    this.myForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.apiService
      .logIn(
        this.myForm.value.name,
        this.myForm.value.password,
        this.myForm.value.role
      )
      .subscribe((data: any) => {
        if (!data) {
          alert('❌ Password is incorrect please try again');
          console.log('login not complete');
          return;
        } else {
          alert('Login successful, Welcome ' + this.myForm.value.name);
          this.router.navigate(['/']);
        }
      });
  }
}
