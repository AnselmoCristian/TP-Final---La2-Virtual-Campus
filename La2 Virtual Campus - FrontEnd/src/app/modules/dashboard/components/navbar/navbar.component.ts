import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '@fte/shared/guards';

@Component({
  selector: 'fte-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

//---------------------------------------------------------------------------------------------------
export class NavbarComponent {

  navItems: NavItem[] = [
    {
      label: "Contact Us",
      url: '/dashboard/contact_us'
    }
  ];

  //---------------------------------------------------------------------------------------------------

  // Role var
  role!: any;

  // User Navbar Name var
  userNavName = 'User';

  //---------------------------------------------------------------------------------------------------
  // Constructor
  constructor(private _authGuard: AuthGuard, private _router: Router) {

    this.role = this._authGuard.getUserRole()
    
  }

  // LogOut Button
  logOut() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

  // Messagges Button
  messages() {
    this._router.navigate(['/dashboard/messages']);
  }
}

export interface NavItem {
  label: String;
  url: String;
}