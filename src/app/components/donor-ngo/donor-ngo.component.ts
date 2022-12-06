import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-donor-ngo',
  templateUrl: './donor-ngo.component.html',
  styleUrls: ['./donor-ngo.component.css']
})
export class DonorNgoComponent implements OnInit {
  donors: any;
  currentDonor = null;
  currentIndex = -1;
  ngoid = 0;
  constructor(private donorService: DonationsService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  retrieveNgoDonors(ngid) {
    this.donorService.findByNgo(ngid)
      .subscribe(
        data => {
          this.donors = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
