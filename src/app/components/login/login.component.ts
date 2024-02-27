import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { NotificationsService } from '../../services/notification/notifications.service';
import { NotificationsComponent } from '../notifications/notifications.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,NotificationsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj: any = {
    "username": "",
    "password": ""
  }


  constructor(private authService:AuthService, private notificationService: NotificationsService ,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.authService.login(this.loginObj).subscribe((res: any) => {
      console.log("res : "+res);
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.notificationService.show( ['Login Success'], 'success');
        this.authService.isAuth.next(true);

        this.router.navigate(['/']);

        this.authService.isAuthAdmin.next(res);
          
        
      }
    
    }, (HttpErrorResponse) => {
      // console.log( HttpErrorResponse.error.message)
      this.notificationService.show([HttpErrorResponse.error.message], "error")
  
      }

    );
  }
}
