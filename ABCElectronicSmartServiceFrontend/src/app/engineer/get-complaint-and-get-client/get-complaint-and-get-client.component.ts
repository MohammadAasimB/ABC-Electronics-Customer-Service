import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/Api.service';

@Component({
  selector: 'app-get-complaint-and-get-client',
  templateUrl: './get-complaint-and-get-client.component.html',
  styleUrls: ['./get-complaint-and-get-client.component.css'],
})
export class GetComplaintAndGetClientComponent {
  complaintId!: number;
  clientId!: string;
  dataComplaint!: any;
  dataClient!: any;

  constructor(private service: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.complaintId = +params.get('complaintId')!;
      this.clientId = params.get('clientId')!;
      console.log(this.complaintId);
      console.log(this.clientId);

      this.service.getComplaintById(this.complaintId).subscribe((data: any) => {
        this.dataComplaint = data;
        console.log(data);
      });

      this.service.getClientById(this.clientId).subscribe((data: any) => {
        this.dataClient = data;
        console.log(data);
      });
    });
  }
}
