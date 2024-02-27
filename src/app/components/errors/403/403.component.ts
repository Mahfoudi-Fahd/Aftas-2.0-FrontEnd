import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-403',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './403.component.html',
  styleUrl: './403.component.scss'
})
export class ForbiddenComponent {

}
