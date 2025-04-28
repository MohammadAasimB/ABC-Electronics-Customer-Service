import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLogin: boolean = false;

  constructor(private login: LoginService) {}

  ngOnInit() {
    // this.login.isSignedIn$.subscribe((status) => {
    //   this.isLogin = status;
    // });
  }

  // logOut() {
  //   this.login.setSignin(false);
  // }
}
