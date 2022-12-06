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
    DonorNgoComponent
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
