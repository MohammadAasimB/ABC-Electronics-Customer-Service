import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/Api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-get-complaint-by-client',
  templateUrl: './get-complaint-by-client.component.html',
  styleUrls: ['./get-complaint-by-client.component.css'],
})
export class GetComplaintByClientComponent {
  id: String = 'client001';
  result: any[] = [];
  value: boolean = false;

  constructor(
    private service: ApiService,
    private router: Router,
    private authService: AuthService
  ) {
    const clientId = this.authService.getUsername();

    if (clientId) {
      this.service.getComplaintByClient(clientId).subscribe((data: any) => {
        this.value = true;
        this.result = data;
        console.log(this.result);
        return this.result;
      });
    }
  }

  ComplaintById(complaintId: number) {
    this.router.navigate(['/getComplaintById', complaintId]);
  }

  // onInit() {
  //   this.service.getComplaintByClient(this.id).subscribe((data: any) => {
  //     this.value = true;
  //     // console.log(data);
  //     this.result = data;
  //     console.log(this.result);
  //     return this.result;
  //   });
  // }
}
