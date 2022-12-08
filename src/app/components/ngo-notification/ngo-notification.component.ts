import { Component, OnInit } from '@angular/core';
import { DonationrequestService } from 'src/app/services/donationrequest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ngo-notification',
  templateUrl: './ngo-notification.component.html',
  styleUrls: ['./ngo-notification.component.css']
})
export class NgoNotificationComponent implements OnInit {
  requests: any;
  currentRequest = null;
  currentIndex = -1;
  ngoid = 0;
  constructor(private requestService: DonationrequestService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  retrieveNgoRequests(did) {
    console.log(did);
   
    this.requestService.findByNgo(did)
      .subscribe(
        data => {
         
          this.requests = data;
          console.log(this.requests);
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
