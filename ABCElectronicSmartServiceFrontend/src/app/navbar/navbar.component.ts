import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Client } from '../model/client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  roles: string[] = [];
  loggedIn = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to login status
    this.authService.isLoggedIn$.subscribe((status) => {
      this.loggedIn = status;
    });

    // Subscribe to role changes
    this.authService.roles$.subscribe((roles) => {
      this.roles = roles;
      console.log('roles-->' + this.roles);
      // console.log('roles-->' + this.authService.getUserRoles());
    });
  }

  hasRole(roles: string): boolean {
    // console.log('-->' + this.roles.includes(roles));
    return this.roles.includes(roles);
    // console.log('---');
    // console.log('--->' + role == 'Client');
    // return role == 'Client';
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/logIn']);
  }
}
