import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './lonin-signup/login/login.component';
import { HomeComponent } from './client/home/home.component';
import { BookComplaintComponent } from './complaint/book-complaint/book-complaint.component';
import { GetComplaintByClientComponent } from './complaint/get-complaint-by-client/get-complaint-by-client.component';
import { GetComplaintByEngineerComponent } from './engineer/get-complaint-by-engineer/get-complaint-by-engineer.component';
import { GetAllProductComponent } from './product/get-all-product/get-all-product.component';
import { GetComplaintByComplaintIdComponent } from './complaint/get-complaint-by-complaint-id/get-complaint-by-complaint-id.component';
import { GetComplaintAndGetClientComponent } from './engineer/get-complaint-and-get-client/get-complaint-and-get-client.component';

const routes: Routes = [
  { path: '', component: GetAllProductComponent },
  { path: 'logIn', component: LoginComponent },
  { path: 'bookComplaint/:modelNumber', component: BookComplaintComponent },
  {
    path: 'getComplaintById/:complaintId',
    component: GetComplaintByComplaintIdComponent,
  },
  {
    path: 'getComplaintAndGetClient/:complaintId/:clientId',
    component: GetComplaintAndGetClientComponent,
  },
  { path: 'getComplaintByClient', component: GetComplaintByClientComponent },
  {
    path: 'getComplaintByEngineer',
    component: GetComplaintByEngineerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
