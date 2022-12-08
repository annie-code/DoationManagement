import { Component, OnInit } from '@angular/core';
import { NgodonationService } from 'src/app/services/ngodonation.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-donation-update',
  templateUrl: './donation-update.component.html',
  styleUrls: ['./donation-update.component.css']
})
export class DonationUpdateComponent implements OnInit {
  currentdonations = null;
  message = '';
  constructor(private donationService: NgodonationService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.searchDonationID(this.route.snapshot.paramMap.get('id'));
 
  }
  searchDonationID(id) {
    this.donationService. get(id)
      .subscribe(
        data => {
          this.currentdonations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updateDonations(): void {
    this.donationService.update(this.currentdonations.id,this.currentdonations)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Donation details was updated!';
          this.router.navigate(['landing/donations']);
        },
        error => {
          console.log(error);
        });
  }


}
