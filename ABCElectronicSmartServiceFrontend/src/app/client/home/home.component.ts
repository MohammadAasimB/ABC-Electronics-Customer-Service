import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isLogin: boolean = false;

  constructor(private login: LoginService, private router: Router) {}

  ngOnInit() {}

  complaint(product: string) {
    this.router.navigate(['/bookComplaint', product]);
  }
}
