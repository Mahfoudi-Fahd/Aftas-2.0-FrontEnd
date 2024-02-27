import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { CUser, User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  user: User = new CUser();
  
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.register(this.user).subscribe((res: any) => {
      console.log("res : "+res);
    });
  }
}
