import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/Api.service';

@Component({
  selector: 'app-get-complaint-by-complaint-id',
  templateUrl: './get-complaint-by-complaint-id.component.html',
  styleUrls: ['./get-complaint-by-complaint-id.component.css'],
})
export class GetComplaintByComplaintIdComponent {
  complaintId!: number;
  data!: any;
  resolved: boolean = true;

  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.complaintId = +params.get('complaintId')!;
      console.log(this.complaintId);

      this.service.getComplaintById(this.complaintId).subscribe((data: any) => {
        this.data = data;
        console.log(data);
        console.log(this.data.status);
        if (this.data.status == 'Resolved') {
          console.log('hlo');
          this.resolved = false;
        }
      });

      // if (this.data.status == 'Resolved') {
      //   console.log('hlo');
      //   this.resolved = false;
      // }
    });
  }

  Resolved() {
    this.service
      .complaintResolved(this.data, this.complaintId)
      .subscribe((data: any) => {
        alert('Changed Status to Resolved');
        this.router.navigate(['/getComplaintByClient']);
      });
  }
}
