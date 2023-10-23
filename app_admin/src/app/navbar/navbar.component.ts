// Import libraries and modules
import { Component, OnInit } from '@angular/core';
//import { AuthenticationService } from '../services/authentication';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

// Component selector, layout, and style
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

// Class reponsible for navigation logic
export class NavbarComponent implements OnInit {
  // Class constructor with object instances
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
    ) { }

    // Method called when the web page is loaded
    ngOnInit() { }
    // Method to check if the user is logged in
    public isLoggedIn(): boolean {
      // Function call to authentication service to verify user is logged in
      // Make the logut button visble
      return this.authenticationService.isLoggedIn();
    }
  // Make the login button visible
  public onLogout(): void {
    return this.authenticationService.logout();
  }
}