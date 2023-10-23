// Import angular modules
import { Component, OnInit } from '@angular/core';

// Import the router module
import { Router } from '@angular/router';

// Import the trips data from the type script file
//import { trips } from '../data/trips'

// Replace trips with information from TripDataService and Trip definition
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication';

// Assign values to the selector, template, and style
@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  // Declare the trip data service as a provider to this class
  providers: [TripDataService]
})
// Create class variable to hold the data
export class TripListingComponent implements OnInit{

  //trips: Array<any> = trips;
  // Define trips variable as an array of Trip objects
  trips: Trip[];
  message: string;
  
  // Inject the router instance into the class
  constructor(private tripDataService: TripDataService,
              private router: Router,
              private authService: AuthenticationService
              ) {}

  // Private member method to retrieve trips from backend
  private getTrips(): void {
    // Output to user when inside the trip listing component
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for Trips';
    // Logic to retrieve trip listing information
    this.tripDataService
      .getTrips()
        .then(foundTrips => {
          // Tunary conditional operation to check if API returned a valid response
          this.message = foundTrips.length > 0 ? "" : 'No trips found';
          // Store the returned trips in local class variable
          this.trips = foundTrips;
            });
  }
  // Uses the router to navigate to the add-trip component
  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  // Public member method to check user log in status
  public isLoggedIn(): boolean {
    // Method call to authentication service
    return this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    // Invoke the local getTrips() function when this class is
    // initialized
    this.getTrips();
  }
}
