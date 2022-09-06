import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fte-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navItems: NavItem[] = [
    {
      label: "Contact Us",
      url: '/dashboard/contact_us'
    }
  ];

  userNavName = 'User';
  
  constructor(private _router: Router) {}

  // LogOut Button
  logOut() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }
}

export interface NavItem {
  label: String;
  url: String;
}