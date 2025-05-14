import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [SignUpComponent, LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [SignUpComponent],
})
export class LoginSignUpModule {}
