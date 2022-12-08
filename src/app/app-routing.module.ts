import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DonorDetailsComponent } from './components/donor-details/donor-details.component';
import { DonorListComponent } from './components/donor-list/donor-list.component';
import { RegisterDonorComponent } from './components/register-donor/register-donor.component';
import { NgoDonationComponent } from './components/ngo-donation/ngo-donation.component';
import { DonationDetailsComponent } from './components/donation-details/donation-details.component';
import { DonorUpdateComponent } from './components/donor-update/donor-update.component';
import { DonorNgoComponent } from './components/donor-ngo/donor-ngo.component';
import { DonorDonationComponent } from './components/donor-donation/donor-donation.component';
import { NgoDetailsComponent } from './components/ngo-details/ngo-details.component';
import { NgoListComponent } from './components/ngo-list/ngo-list.component';
import { NgoRegisterComponent } from './components/ngo-register/ngo-register.component';
import { NgoUpdateComponent } from './components/ngo-update/ngo-update.component';
import { DonationListComponent } from './components/donation-list/donation-list.component';
import { DonationRegisterComponent } from './components/donation-register/donation-register.component';
import { DonationUpdateComponent } from './components/donation-update/donation-update.component';
import { DdonationRequestComponent } from './components/ddonation-request/ddonation-request.component';
import { NgoNotificationComponent } from './components/ngo-notification/ngo-notification.component';
import { DonorRequestComponent } from './components/donor-request/donor-request.component';
const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'landing/donors', component: DonorListComponent },
  { path: 'landing/ngos', component: NgoListComponent },
  { path: 'landing/donations', component: DonationListComponent },
  { path: 'landing/donationrequest', component: DdonationRequestComponent },
  { path: 'landing/donors/register', component: RegisterDonorComponent},
  { path: 'details/:id', component: DonorDetailsComponent },
  { path: 'update/:id', component: DonorUpdateComponent },
  { path: 'landing/donors/ngodonors', component: DonorNgoComponent },
  {path:'landing/ngos/ngoregister',component:NgoRegisterComponent},
  {path:'ngoupdate/:id',component:NgoUpdateComponent},
  {path:'ngodetails/:id',component:NgoDetailsComponent},
  { path: 'landing/donations/donordonation', component: DonorDonationComponent },
  { path: 'landing/donations/ngodonation', component: NgoDonationComponent },
  {path:'landing/donations/donregister',component:DonationRegisterComponent},
  {path:'donationupdate/:id',component:DonationUpdateComponent},
  {path:'donationdetails/:id',component:DonationDetailsComponent},
  { path: 'landing/donationrequest/donorlist', component: DonorRequestComponent },
  { path: 'landing/donationrequest/ngolist', component: NgoNotificationComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
