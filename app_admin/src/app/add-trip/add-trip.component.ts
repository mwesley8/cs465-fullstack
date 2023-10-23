// import libraries and modules
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';

// Component selector, layout, and style
@Component({
selector: 'app-add-trip',
templateUrl: './add-trip.component.html',
styleUrls: ['./add-trip.component.css']
})

// Class responsible for obtaining trip information for post request
export class AddTripComponent implements OnInit {
  // Class member variables
  addForm: FormGroup;
  submitted = false;

  // Class constructor with object instances
  constructor(private formBuilder: FormBuilder, private router: Router, private tripService: TripDataService) { }

  // Form created when web page is loaded
  ngOnInit() {
    this.addForm = this.formBuilder.group({
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
}
  // Function executed when the submit button is pressed
  onSubmit() {
    // Condition to check if button was press
    this.submitted = true;
    // Condition to check if the form is valid: all fields completed
    if(this.addForm.valid){
      // When true, send the form data to trip service
      this.tripService.addTrip(this.addForm.value)
      // Developer can output data to the console and then navigate to the home page
      .then( data => {
        // Testing output to the console
        //console.log(data);

        // Navigate the user to the home page
        this.router.navigate(['']);
      });
    }
  }
  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }
}