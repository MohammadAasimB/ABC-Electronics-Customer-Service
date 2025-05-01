import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/Api.service';

@Component({
  selector: 'app-get-complaint-by-engineer',
  templateUrl: './get-complaint-by-engineer.component.html',
  styleUrls: ['./get-complaint-by-engineer.component.css'],
})
export class GetComplaintByEngineerComponent {
  id: number = 3;
  result: any[] = [];
  value: boolean = false;

  engineerId: number = this.id;
  status: string = '';
  resolvedDate: string = '';

  constructor(private service: ApiService, private router: Router) {
    this.service.getComplaintByEngineer(this.id).subscribe((data: any) => {
      this.value = true;
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
        this.result = data;
        console.log(this.result);
        return this.result;
      });
  }

  ComplaintById(complaintId: number, clientId: string) {
    this.router.navigate(['/getComplaintAndGetClient', complaintId, clientId]);
  }

  onSubmit(): void {
    this.service
      .getComplaintsByEngineerStatusAndResolvedDate(
        this.engineerId,
        this.status,
        this.resolvedDate
      )
      .subscribe({
        next: (data: any) => {
          if (data.length === 0) {
            this.result = [
              {
                message: `No ${this.status} complaints for ${this.resolvedDate}`,
              },
            ];
          } else {
            this.result = data;
          }
        },
        error: (error: any) => {
          console.error('Error fetching complaints', error);
        },
      });
  }
}
