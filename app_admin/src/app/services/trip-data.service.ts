// Import modules and libraries
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trip } from '../models/trip'
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';

// Class needed to handle Ghetto Gettaway CRUD operations
@Injectable()
export class TripDataService {
  
  // Class constructor with object instance to inject information from browser storage
  // Object instantiation of HttpClient to handle HTTP request
  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
    ) { }

  // Declare and assign variable to route
  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  // Public member method to retrieve trip information from the back-end API 
  public getTrips(): Promise<Trip[]> {
    // Output to user inside the get trips method
    console.log('Inside TripDataService#getTrips');
    // Logic to perfrom get request to the Mongo API
    return this.http
        // Get request to the Mongo DB
        .get(`${this.apiBaseUrl}trips`)
        .toPromise()
        // Angular automatically converts to JSON
        // Convert response an array of nested dictionaries
        .then(response => response as Trip[])
        // Exception handling
        .catch(this.handleError);
  }

  // Public member method to perfrom POST operation in the Mongo DB
  public addTrip(formData: Trip): Promise<Trip> {
    // Output to user inside the add trip method
    console.log('Inside TripDataService#addTrip');
    // Logic to perform post requst to the Mongo API
    return this.http
      // Post request to the Mongo DB
      .post(this.tripUrl, formData)
      .toPromise()
      // Angular automatically converts to JSON
      // Convert response an array of nested dictionaries
      .then(response =>response as Trip[])
      // Exception handling
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    // Output to user inside the get trip method
    console.log('Inside TripDataService#getTrip' + ' ' + tripCode);
    return this.http
      // Get request to the Mongo DB
      .get(this.tripUrl + tripCode)
      .toPromise()
      // Angular automatically converts to JSON
      // Convert response an array of nested dictionaries
      .then(response =>response as Trip)
      // Exception handling
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    // Output to user inside the update trip method
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);
    return this.http
      // Put request to the Mongo DB
      .put(this.tripUrl + formData.code, formData)
      .toPromise()
      // Angular automatically converts to JSON
      // Convert response an array of nested dictionaries
      .then(response =>response as Trip[])
      // Exception handling
      .catch(this.handleError);
  }

  // Public member method to handle login 
  public login(user: User): Promise<AuthResponse> {
    // Console output to user inside the login method
    console.log('Inside TripDataService#login');
    // Pass the user and route to method call to login the user
    return this.makeAuthApiCall('login', user);
  }

  // Public member method to register user 
  public register(user: User): Promise<AuthResponse> {
    // Pass the user and route to method call to register the user
    return this.makeAuthApiCall('register', user);
  }
  private makeAuthApiCall(urlPath: string, user: User):
    Promise<AuthResponse> {
    // Declare and assign variable to string
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      // Post request to the Mongo DB
      .post(url, user)
      .toPromise()
      // Angular automatically converts to JSON
      // Convert response an array of nested dictionaries
      .then(response => response as AuthResponse)
      // Exception handling
      .catch(this.handleError);
  }

  // Public member method for exception handling
  private handleError(error: any): Promise<any> {
    // Console output to user inside handle error method
    console.error('Something has gone wrong', error);
    // Return erro message and end request
    return Promise.reject(error.message || error);
  }
}
