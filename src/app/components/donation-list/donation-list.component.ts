import { Component, OnInit } from '@angular/core';
import { NgodonationService } from 'src/app/services/ngodonation.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {
  donations: any;
  currentDonation = null;
  currentIndex = -1;
  donid = 0;
  constructor(private donationService: NgodonationService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrievedonations();
  }
  retrievedonations() {
    this.donationService.getAll()
      .subscribe(
        data => {
          this.donations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList() {
    this.retrievedonations();
    this.currentDonation = null;
    this.currentIndex = -1;
  }

  setActiveDonation(ngo, index) {
    this.currentDonation = ngo;
    this.currentIndex = index;
  }
  deleteDonation(id): void {
    console.log(id)
    this.donationService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.retrievedonations();
        },
        error => {
          console.log(error);
        });
        
  }

}
