import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations.service';
import { NavbarDonorComponent } from '../navbar-donor/navbar-donor.component';

@Component({
  selector: 'app-register-donor',
  templateUrl: './register-donor.component.html',
  styleUrls: ['./register-donor.component.css']
})
export class RegisterDonorComponent implements OnInit {
  donor = {
    donorid: 0,
    name: '',
    username: '',
    password: '',
    email: '',
    address: '',
    phone: '',
    isdeleted: true,
    ngoid: 0
  };
  submitted = false;
  constructor(private donorService: DonationsService) { }

  ngOnInit(): void {
  }
  saveDonor() {
    const data = {
      id: this.donor.donorid,
      name: this.donor.name,
      username: this.donor.username,
      password: this.donor.password,
    email: this.donor.email,
    address: this.donor.address,
    phone: this.donor.phone,
    isdeleted: true,
    ngoid:this.donor.ngoid
    };

    this.donorService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newDonor() {
    this.submitted = false;
    this.donor = {
      donorid: 0,
      name: '',
      username: '',
      password: '',
    email: '',
    address: '',
    phone: '',
    isdeleted: true,
    ngoid: 0
    };
  }
}



