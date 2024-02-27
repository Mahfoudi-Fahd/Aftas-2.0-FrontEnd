import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, elementAt, map, tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';
import { User } from '../../models/user';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  isAuth = new BehaviorSubject<boolean>(this.isAuthenticated());
  isAuthAdmin = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  login(loginObj: any): Observable<any> {
    return this.http.post('http://localhost:8081/api/v1/auth/authenticate', loginObj);
  }

  loadAuthUser() {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get('http://localhost:8081/api/v1/user/load_auth_user', { headers }).pipe(
      catchError((error) => {
        if (error.status === 401 || error.status === 403) {
          // Token expired or unauthorized
          console.error('Token expired or unauthorized:', error);
          this.removeToken(); // Clear the expired token
          this.removeUser(); // Clear the expired user          
        }
        return throwError(error);
      })
    );
  }

  logout() {
    this.removeToken();
    this.removeUser();
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }
  removeUser() {
    localStorage.removeItem('user');
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  isAdmin(): Observable<boolean> {
    return this.loadAuthUser().pipe(
      map((res: any) => {
        const user = res;
        const role = user.role;
        return role.includes('ROLE_MANAGER');
      })
    );
  }
  isUser(): Observable<boolean> {
    return this.loadAuthUser().pipe(
      map((res: any) => {
        const user = res;
        const role = user.role;
        return role.includes('ROLE_MEMBER');
      })
    );
  }

  register(user: User): Observable<any> {
    return this.http.post('http://localhost:8081/api/v1/auth/register', user);
  }
  getUser(): User {
    const user = localStorage.getItem('user');
    return JSON.parse(user as string);
  }
}

