// Import required components and classes
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication';

import { User } from '../models/user';

// Component selector, layout and style for navigation to page
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// Class responsible for generating post request informaiton
export class LoginComponent implements OnInit {
  public formError: string = '';
  public credentials = {
  name: '',
  email: '',
  password: ''
};

// Class custructor to instantiate object instances
constructor(
  private router: Router,
  private authenticationService: AuthenticationService
) { }

// Function executed when web page is loaded
ngOnInit() {}

// Method executed when the login/submit button is pressed
public onLoginSubmit(): void {
  // Declare string to hold error message
  this.formError = '';

  // Condition to check if the form contains values
  if (!this.credentials.email || !this.credentials.password) {
    // When true, assign error message to string and output to user
    this.formError = 'All fields are required, please try again';
  } else {
    // Form contains valid values, call method to login
    this.doLogin();
  }
}

// Method to log in the user
private doLogin(): void {
  // Pass the credentials to the authentication passport middleware
  this.authenticationService.login(this.credentials)
    // Navigation will be handle by the nav bar
    .then(() => this.router.navigateByUrl('#'))
    // Message to user when an error occurs
    .catch((message) => this.formError = message);
  }
}
