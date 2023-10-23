// Import libraries and modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login.component';

// Declare and define routes for user navigation
const routes: Routes = [
    {path: 'add-trip', component: AddTripComponent},
    {path: 'edit-trip', component: EditTripComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: TripListingComponent, pathMatch: 'full'}
]

// Module to user Anugular's internal routing
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
// Export router
export class AppRoutingModule {}
