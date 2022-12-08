import { Component, OnInit } from '@angular/core';
import { DonationrequestService } from 'src/app/services/donationrequest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ddonation-request',
  templateUrl: './ddonation-request.component.html',
  styleUrls: ['./ddonation-request.component.css']
})
export class DdonationRequestComponent implements OnInit {
  request = {
    id: 0,
      amount: 0,
    status:'',
    enddate: '',
      isdeleted: true,
    ngoid:0,
    donorid:0,
    donationid:0
    };
  submitted = false;
  constructor(private requestService: DonationrequestService) { }
  ngOnInit(): void {
  }
  saveRequest() {
    const data = {
      id: this.request.id,
      amount:this.request.amount,
      status:this.request.status,
    enddate: this.request.enddate,
   
    isdeleted: true,
    ngoid:this.request.ngoid,
    donorid:this.request.donorid,
     donationid:this.request.donationid
    
    };

    this.requestService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newDonation() {
    this.submitted = false;
    this.request = {
      id: 0,
      amount: 0,
    status:'',
    enddate: '',
      isdeleted: true,
    ngoid:0,
    donorid:0,
    donationid:0
    };
  }

}
