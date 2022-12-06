import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarDonorComponent } from '../navbar-donor/navbar-donor.component';
@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
  donors: any;
  currentDonor = null;
  currentIndex = -1;
  donorid = 0;
  constructor(private donorService: DonationsService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveDonors();
  }
  retrieveDonors() {
    this.donorService.getAll()
      .subscribe(
        data => {
          this.donors = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList() {
    this.retrieveDonors();
    this.currentDonor = null;
    this.currentIndex = -1;
  }

  setActiveDonor(donor, index) {
    this.currentDonor = donor;
    this.currentIndex = index;
  }
 /*  searchDonorID() {
    this.donorService. get(this.donorid)
      .subscribe(
        data => {
          this.donors = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  } */
  deleteDonor(id): void {
    console.log(id)
    this.donorService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          
        },
        error => {
          console.log(error);
        });
        this.retrieveDonors ();
  }

}
