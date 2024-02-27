import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CompetitionComponent } from './components/competition/competition.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { initFlowbite } from 'flowbite';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CompetitionComponent,RouterLink,UserNavbarComponent,DashboardComponent,SidebarComponent,NotificationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private authService : AuthService) { }
  ngOnInit(): void {
    initFlowbite();
    
      this.authService.loadAuthUser().subscribe((res: any) => {
        localStorage.setItem('user', JSON.stringify(res));
      });
    
      
  }
  title = 'Aftas-FrontEnd';
}
