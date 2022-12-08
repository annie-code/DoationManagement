import { Component, OnInit } from '@angular/core';
import { NgodonationService } from 'src/app/services/ngodonation.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ngo-donation',
  templateUrl: './ngo-donation.component.html',
  styleUrls: ['./ngo-donation.component.css']
})
export class NgoDonationComponent implements OnInit {
  donations: any;
  currentDonation = null;
  currentIndex = -1;
  ngoid = 0;
  constructor(private donationService: NgodonationService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  retrieveNgoDonations(did) {
    console.log(did);
   
    this.donationService.findByNgo(did)
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
