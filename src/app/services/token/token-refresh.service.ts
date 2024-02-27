import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { catchError, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenRefreshService {

constructor(private authService: AuthService ) { }


}
