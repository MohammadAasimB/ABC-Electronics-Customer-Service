import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientModule } from './client/client.module';
import { EngineerModule } from './engineer/engineer.module';
import { AdminModule } from './admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LonInSignUpModule } from './lonin-signup/lon-in-sign-up.module';
import { HttpClientModule } from '@angular/common/http';
import { ComplaintModule } from './complaint/complaint.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    EngineerModule,
    AdminModule,
    ReactiveFormsModule,
    LonInSignUpModule,
    HttpClientModule,
    ComplaintModule,
    FormsModule,
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
