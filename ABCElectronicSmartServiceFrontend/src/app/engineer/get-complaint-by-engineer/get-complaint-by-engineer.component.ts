import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/Api.service';

@Component({
  selector: 'app-get-complaint-by-engineer',
  templateUrl: './get-complaint-by-engineer.component.html',
  styleUrls: ['./get-complaint-by-engineer.component.css'],
})
export class GetComplaintByEngineerComponent {

  id: String = '1';
  result: any[] = [];
  value: boolean = false;

  constructor(private service: ApiService, private router: Router) {
    this.service.getComplaintByEngineer(this.id).subscribe((data: any) => {
      this.value = true;
      // console.log(data);
      this.result = data;
      console.log(this.result);
      return this.result;
    });
  }

  Sorted() {
    this.service
      .getComplaintByEngineerAndSorted(this.id)
      .subscribe((data: any) => {
        this.value = true;
        // console.log(data);
        this.result = data;
        console.log(this.result);
        return this.result;
      });
  }

  ComplaintById(complaintId: number, clientId: string) {
    this.router.navigate(['/getComplaintAndGetClient', complaintId, clientId]);
  }
}
