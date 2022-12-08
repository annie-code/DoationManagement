import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterDonorComponent } from './components/register-donor/register-donor.component';
import { DonorDetailsComponent } from './components/donor-details/donor-details.component';
import { DonorListComponent } from './components/donor-list/donor-list.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';
import { NavbarDonorComponent } from './components/navbar-donor/navbar-donor.component';
import { NgoDetailsComponent } from './components/ngo-details/ngo-details.component';
import { DonationDetailsComponent } from './components/donation-details/donation-details.component';
import { DonorUpdateComponent } from './components/donor-update/donor-update.component';
import { DonorNgoComponent } from './components/donor-ngo/donor-ngo.component';
import { NgoListComponent } from './components/ngo-list/ngo-list.component';
import { NgoUpdateComponent } from './components/ngo-update/ngo-update.component';
import { NgoRegisterComponent } from './components/ngo-register/ngo-register.component';
import { NavbarNgoComponent } from './components/navbar-ngo/navbar-ngo.component';
import { NavbarDonationComponent } from './components/navbar-donation/navbar-donation.component';
import { DonationRegisterComponent } from './components/donation-register/donation-register.component';
import { DonationListComponent } from './components/donation-list/donation-list.component';
import { DonationUpdateComponent } from './components/donation-update/donation-update.component';
import { DonorDonationComponent } from './components/donor-donation/donor-donation.component';
import { NgoDonationComponent } from './components/ngo-donation/ngo-donation.component';
import { DdonationRequestComponent } from './components/ddonation-request/ddonation-request.component';
import { NavbarRequestComponent } from './components/navbar-request/navbar-request.component';
import { DonorRequestComponent } from './components/donor-request/donor-request.component';
import { NgoNotificationComponent } from './components/ngo-notification/ngo-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegisterDonorComponent,
    DonorDetailsComponent,
    DonorListComponent,
    NavbarMainComponent,
    NavbarDonorComponent,
    NgoDetailsComponent,
    DonationDetailsComponent,
    DonorUpdateComponent,
    DonorNgoComponent,
    NgoListComponent,
    NgoUpdateComponent,
    NgoRegisterComponent,
    NavbarNgoComponent,
    NavbarDonationComponent,
    DonationRegisterComponent,
    DonationListComponent,
    DonationUpdateComponent,
    DonorDonationComponent,
    NgoDonationComponent,
    DdonationRequestComponent,
    
    NavbarRequestComponent,
         DonorRequestComponent,
         NgoNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
