import { Component, OnInit } from '@angular/core';
import { DonationrequestService } from 'src/app/services/donationrequest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-donor-request',
  templateUrl: './donor-request.component.html',
  styleUrls: ['./donor-request.component.css']
})
export class DonorRequestComponent implements OnInit {

  requests: any;
  currentRequest = null;
  currentIndex = -1;
  donorid = 0;
  constructor(private requestService: DonationrequestService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  retrieveDonorRequests(did) {
    console.log(did);
   
    this.requestService.findByDonor(did)
      .subscribe(
        data => {
         
          this.requests = data;
          console.log(data);
          console.log(this.requests);
         
        },
        error => {
          console.log(error);
        });
  }
}
