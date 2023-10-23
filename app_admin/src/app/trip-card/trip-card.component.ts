// Import libraries and modules
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication';

// Component selector, layout, and style
@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})

// Export class responsible for routing user to the edit trip page
export class TripCardComponent implements OnInit{
  @Input ('trip') trip: any;

  // Class constructor with object instances
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  // Public member method to check user log in status
  public isLoggedIn(): boolean {
    // Function call to authentication service for status
    return this.authService.isLoggedIn();
  }

  // Public member method called when page loads
  ngOnInit(): void {
  }
  // "Stash" the trip code in browser's local storage for the
  // edit component to retrieve later
  public editTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip'])
  }
}
