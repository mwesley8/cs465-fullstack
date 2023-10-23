// Import required components and classes
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';

// Component selector, layout and style for navigation to page
@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})

// Class responsible for generating put request informaiton
export class EditTripComponent {

  // Class member variables
  editForm: FormGroup;
  submitted = false;

  // Class custructor to instantiate object instances
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
    ) { }

    // Method executed when page is loaded
    ngOnInit() {
      // retrieve stashed tripId
      let tripCode = localStorage.getItem("tripCode");

      // Conditional statemet when the trip code is not found
      if (!tripCode) {
        // Output to user
        alert("Something went wrong, couldn't find my stash!!");
        // Route the user back to the home page
        this.router.navigate(['']);
        return;
      }

      // Output to user when the trip code has been found
      console.log('EditTripComponent#onInit found tripCode' + " " + tripCode);

      // Declare and define form structure with the required elements
      this.editForm = this.formBuilder.group({
        _id: [],
        code: ['', Validators.required],
        name: ['', Validators.required],
        length: ['', Validators.required],
        start: ['', Validators.required],
        resort: ['', Validators.required],
        perPerson: ['', Validators.required],
        image: ['', Validators.required],
        description: ['', Validators.required],
      })

      // Get the most recent trip in the backend database
      this.tripService.getTrip(tripCode)
        .then(data => {
          // Define what kind of index type the object has
          const myObj: {[index: string]:any} = data;
          // Store the field attributes of the form
          this.editForm.patchValue(myObj[0]);
        })
    }

    // Function executed when submit button is pressed
    onSubmit() {
      // Submit button pressed
      this.submitted = true;

      // Check if the form has all the required fields
      if (this.editForm.valid) {
        // Pass the form data to the trip service update trip method
        this.tripService.updateTrip(this.editForm.value)
          .then(data => {
            // Navigate to the home page
            this.router.navigate(['']);
          });
      }
    }

    // get the form short name to access the form fields
    get f() { return this.editForm.controls; }
}
