import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const AdminGuard = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    // return authService.isAdmin().pipe(
    //   map((res: boolean) => {
    //     if (res) {
    //       return true;
    //     }
    //     else {
    //       router.navigate(['/error/403']);
    //       // alert('You are not authorized to access this page');
    //       return false;
    //     }
    //   })
    // );
    return true;
  }
  else {
    router.navigate(['/login']);
    // alert('You are not authorized to access this page');
    return false;
  }
}