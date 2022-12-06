import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit {
  currentdonors: any;
  constructor(private donorService: DonationsService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.searchDonorID(this.route.snapshot.paramMap.get('id'));
  }
  searchDonorID(id) {
    this.donorService. get(id)
      .subscribe(
        data => {
          this.currentdonors = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
