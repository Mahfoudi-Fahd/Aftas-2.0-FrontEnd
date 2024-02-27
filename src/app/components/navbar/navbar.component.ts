import { CommonModule } from '@angular/common';
import {  Component, HostListener, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../services/auth/auth.service';
import { NotificationsService } from '../../services/notification/notifications.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  isAuth: boolean = false;
  isAdmin: boolean = false;
  isUser: boolean = false;


  constructor(private authService: AuthService, private notificationService: NotificationsService, private route: Router) { }

  ngOnInit() {
    initFlowbite();

    this.authService.isAuth.subscribe((res) => {
      this.isAuth = res;
    });

    this.authService.isAuthAdmin.subscribe((res) => {
      this.isAdmin = res;
    });


  }

  devicesDropdownVisible = false;
  dropdownContainerVisible = false;
  burgerDropdownVisible = false;
  searchDropdownVisible = false;


  logout() {
    if (this.authService.isAuthenticated()) {
      this.authService.logout();
      this.isAuth = false;
      this.isAdmin = false;
      this.notificationService.show(["You have been logged out successfully"], "success");
    } else {
      this.notificationService.show(["You are not logged in"], "error");
    }
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  isAdminist(){
    return this.authService.isAdmin();
  }
 

  closeDropdowns() {
    this.devicesDropdownVisible = false;
    this.dropdownContainerVisible = false;
    this.burgerDropdownVisible = false;
  }
  closeSearchDropdown() {
    this.searchDropdownVisible = false;
  }

  toggleDevicesDropdown() {
    this.devicesDropdownVisible = !this.devicesDropdownVisible;

    if (!this.dropdownContainerVisible) {
      this.dropdownContainerVisible = false;
    }

    if (!this.burgerDropdownVisible) {
      this.burgerDropdownVisible = false;
    }
    this.searchDropdownVisible = false;
  }

  toggleSearchDropdown() {
    this.searchDropdownVisible = !this.searchDropdownVisible;
    this.devicesDropdownVisible = false;
  }
  closeAllDropdowns() {
    this.devicesDropdownVisible = false;
    this.dropdownContainerVisible = false;
    this.burgerDropdownVisible = false;
    this.searchDropdownVisible = false;
  }

  toggleBurgerDropdown() {
    this.burgerDropdownVisible = !this.burgerDropdownVisible;

    if (!this.dropdownContainerVisible) {
      this.dropdownContainerVisible = false;
    }

    if (!this.devicesDropdownVisible) {
      this.devicesDropdownVisible = false;
    }
    this.searchDropdownVisible = false;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;

    if (this.prevScrollpos < currentScrollPos) {
      this.devicesDropdownVisible = false;
      this.dropdownContainerVisible = false;
    }

    this.prevScrollpos = currentScrollPos;
  }

  private prevScrollpos = window.pageYOffset;

}
