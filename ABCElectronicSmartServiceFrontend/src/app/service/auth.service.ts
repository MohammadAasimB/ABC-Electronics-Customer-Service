import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

interface MyJwtPayload {
  sub: string;
  roles: string[];
  exp: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  private roles = new BehaviorSubject<string[]>(this.getRolesFromToken());

  isLoggedIn$ = this.loggedIn.asObservable();
  roles$ = this.roles.asObservable();

  private hasToken(): boolean {
    return !!localStorage.getItem('jwtToken');
  }

  private getRolesFromToken(): string[] {
    const token = localStorage.getItem('jwtToken');
    if (!token) return [];
    try {
      const decoded = jwtDecode<MyJwtPayload>(token);
      return decoded.roles || [];
    } catch {
      return [];
    }
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  getUserRoles(): string[] {
    // console.log('rol' + this.roles.value);
    return this.roles.value;
  }

  getUsername(): string | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      const decoded = jwtDecode<MyJwtPayload>(token);
      return decoded.sub;
    } catch {
      return null;
    }
  }

  isRole(roles: string): boolean {
    return this.getUserRoles().includes(roles);
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  login(token: string): void {
    localStorage.setItem('jwtToken', token);
    this.loggedIn.next(true);
    this.roles.next(this.getRolesFromToken());
    // console.log('->' + localStorage.getItem('jwtToken'));
    console.log('Decoded Token:', jwtDecode<MyJwtPayload>(token));
    // console.log('role:', jwtDecode<MyJwtPayload>(token).roles || []);
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    this.loggedIn.next(false);
    this.roles.next([]);
  }
}
