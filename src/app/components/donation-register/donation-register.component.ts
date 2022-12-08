import { Component, OnInit } from '@angular/core';
import { NgodonationService } from 'src/app/services/ngodonation.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-donation-register',
  templateUrl: './donation-register.component.html',
  styleUrls: ['./donation-register.component.css']
})
export class DonationRegisterComponent implements OnInit {
  donation = {
    id: 0,
    type: '',
    amount: 0,
    pdate: '',
   
    isdeleted: true,
    ngoid:0,
    donorid:0
   
  };
  submitted = false;
  constructor(private donationService: NgodonationService) { }

  ngOnInit(): void {
  }
  saveDonation() {
    const data = {
      id: this.donation.id,
    type: this.donation.type,
    amount:this.donation.amount,
    date: this.donation.pdate,
   
    isdeleted: true,
    ngoid:this.donation.ngoid,
    donorid:this.donation.donorid
     
    
    };

    this.donationService.create(data)
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
    this.donation = {
      id: 0,
      type: '',
      amount: 0,
      pdate: '',
     
      isdeleted: true,
      ngoid:0,
      donorid:0
    };
  }
}
