import { Component, OnInit } from '@angular/core';
import { NgodonationService } from 'src/app/services/ngodonation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-donation-details',
  templateUrl: './donation-details.component.html',
  styleUrls: ['./donation-details.component.css']
})
export class DonationDetailsComponent implements OnInit {
  currentdonations: any;
  constructor(private donationService: NgodonationService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
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

}
