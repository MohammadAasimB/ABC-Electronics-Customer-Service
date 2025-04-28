import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllProductComponent } from './get-all-product/get-all-product.component';

@NgModule({
  declarations: [GetAllProductComponent],
  imports: [CommonModule],
  exports: [GetAllProductComponent],
})
export class ProductModule {}
