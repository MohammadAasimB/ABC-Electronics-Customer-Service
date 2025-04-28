import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/Api.service';

@Component({
  selector: 'app-get-complaint-by-complaint-id',
  templateUrl: './get-complaint-by-complaint-id.component.html',
  styleUrls: ['./get-complaint-by-complaint-id.component.css'],
})
export class GetComplaintByComplaintIdComponent {
  complaintId!: number;
  data!: any;

  constructor(private service: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.complaintId = +params.get('complaintId')!;
      console.log(this.complaintId); // Ensure complaintId is set correctly

      // Move the HTTP request inside the subscription
      this.service.getComplaintById(this.complaintId).subscribe((data: any) => {
        this.data = data;
        console.log(data);
      });
    });
  }
}
