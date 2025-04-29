import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetComplaintByEngineerComponent } from './get-complaint-by-engineer/get-complaint-by-engineer.component';
import { GetComplaintAndGetClientComponent } from './get-complaint-and-get-client/get-complaint-and-get-client.component';

@NgModule({
  declarations: [GetComplaintByEngineerComponent, GetComplaintAndGetClientComponent],
  imports: [CommonModule],
  exports: [GetComplaintByEngineerComponent],
})
export class EngineerModule {}
