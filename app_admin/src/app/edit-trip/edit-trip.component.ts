import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
    ) { }

    ngOnInit() {
      // retrieve stashed tripId
      let tripCode = localStorage.getItem("tripCode");
      if (!tripCode) {
        alert("Something went wrong, couldn't find my stash!!");
        this.router.navigate(['']);
        return;
      }

      console.log('EditTripComponent#onInit found tripCode' + " " + tripCode);

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
          console.log(myObj[0]);
          this.editForm.patchValue(myObj[0]);
        })
    }

    onSubmit() {
      this.submitted = true;

      if (this.editForm.valid) {
        this.tripService.updateTrip(this.editForm.value)
          .then(data => {
            console.log(data);
            this.router.navigate(['']);
          });
      }
    }

    // get the form short name to access the form fields
    get f() { return this.editForm.controls; }
}
