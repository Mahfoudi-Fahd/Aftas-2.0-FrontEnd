import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'user-app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.scss'
})
export class UserNavbarComponent {
}

