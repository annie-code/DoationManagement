import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DonorDetailsComponent } from './components/donor-details/donor-details.component';
import { DonorListComponent } from './components/donor-list/donor-list.component';
import { RegisterDonorComponent } from './components/register-donor/register-donor.component';
import { NgoDetailsComponent } from './components/ngo-details/ngo-details.component';
import { DonationDetailsComponent } from './components/donation-details/donation-details.component';
import { DonorUpdateComponent } from './components/donor-update/donor-update.component';
import { DonorNgoComponent } from './components/donor-ngo/donor-ngo.component';
const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'landing/donors', component: DonorListComponent },
  { path: 'landing/ngos', component: NgoDetailsComponent },
  { path: 'landing/donations', component: DonationDetailsComponent },
 
  { path: 'landing/donors/register', component: RegisterDonorComponent},
  { path: 'details/:id', component: DonorDetailsComponent },
  { path: 'update/:id', component: DonorUpdateComponent },
  { path: 'landing/donors/ngodonors', component: DonorNgoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
