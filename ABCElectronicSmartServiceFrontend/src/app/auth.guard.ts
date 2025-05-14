import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = authService.isLoggedIn();
  const roles = authService.getUserRoles();

  // Block ROLE_CLIENT from accessing certain routes
  const restrictedForClient = [
    '/getComplaintByEngineer',
    '/getComplaintAndGetClient',
    // Add more restricted paths here
  ];

  if (isLoggedIn) {
    const currentPath = state.url;
    if (
      roles.includes('ROLE_CLIENT') &&
      restrictedForClient.some((path) => currentPath.startsWith(path))
    ) {
      router.navigate(['/logIn']); // Redirect to home or unauthorized page
      return false;
    }
    return true;
  } else {
    router.navigate(['/logIn']);
    return false;
  }
};
