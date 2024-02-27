import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'error-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavbarComponent],
  templateUrl: './error-layout.component.html',
  styleUrl: './error-layout.component.scss'
})
export class ErrorLayoutComponent {

}
