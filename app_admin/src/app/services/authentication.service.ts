// Import modules and libraries
import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { TripDataService } from '../services/trip-data.service';

// We want to inject browser storage from the root
@Injectable({
providedIn: 'root'
})

// Class responsible for, accessing storage, verifying user, and processing API response
export class AuthenticationService {
  constructor(@Inject(BROWSER_STORAGE) private storage: Storage, private tripDataService: TripDataService) { }

// Returned string or null, now error gone
public getToken(): string {
  return JSON.parse(this.storage.getItem('travlr-token')!); //this.storage.getItem('travlr-token'); 
}

// Public member method to set the token
public saveToken(token: string): void {
  this.storage.setItem('travlr-token', token);
}

// Public member method to login user
public login(user: User): Promise<any> {
  return this.tripDataService.login(user)
    .then((authResp: AuthResponse) =>
    this.saveToken(authResp.token));
}

// Public member method to register a user
public register(user: User): Promise<any> {
  return this.tripDataService.register(user)
      .then((authResp: AuthResponse) =>
      this.saveToken(authResp.token));
}

// Public member method to logout a user
public logout(): void {
  this.storage.removeItem('travlr-token');
}

// Public member method to status log in status
public isLoggedIn(): boolean {
  // Declare and assign variable to token value
  const token: string = this.getToken();
  // Conditional statement to check the value of the token
  if (token) {
    // If the token has a value
    // Debug statement to user inside the is logged in method
    console.log("Inside isloggeIN");
    // Parse the token as a JSON file and retrive the token value
    const payload = JSON.parse(atob(token.split('.')[1]));
    // Return the token value with an expiration date
    return payload.exp > (Date.now() / 1000);
  }
  // Condition when the token is null 
  else {
      return false;
  }
}
// Public member method to get the current logged in user
public getCurrentUser(): User {
    // Instantiate an object instance
    var temp = new User;

    // Assign object instance attributes
    //temp.email = "working@yahoo.com";
    //temp.name  = "Maurice";

  // Condition to check logged in status
  if (this.isLoggedIn()) {
    // Declare and assign variable to token value
    const token: string = this.getToken();
    // Declare and assign variables to key value pairs in token
    const { email, name } = JSON.parse(atob(token.split('.')[1]));
        // return current user
        return { email, name } as User;
  }
  // return default user
  return temp;
  }
}