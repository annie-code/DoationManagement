import { Component, OnInit } from '@angular/core';
import { NgodonationService } from 'src/app/services/ngodonation.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-donor-donation',
  templateUrl: './donor-donation.component.html',
  styleUrls: ['./donor-donation.component.css']
})
export class DonorDonationComponent implements OnInit {
  donations: any;
  currentDonation = null;
  currentIndex = -1;
  donorid = 0;
  constructor(private donationService: NgodonationService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  retrieveDonorDonations(did) {
    console.log(did);
    this.donationService.findByDonor(did)
      .subscribe(
        data => {
          this.donations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
