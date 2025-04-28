import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/Api.service';

@Component({
  selector: 'app-get-all-product',
  templateUrl: './get-all-product.component.html',
  styleUrls: ['./get-all-product.component.css'],
})
export class GetAllProductComponent {
  result: any[] = [];
  constructor(private service: ApiService, private router: Router) {
    this.service.getAllProducts().subscribe((data: any) => {
      console.log(data);
      this.result = data;
      console.log(this.result);
      return this.result;
    });
  }

  complaint(modelNumber: any) {
    this.router.navigate(['/bookComplaint', modelNumber]);
  }
}
