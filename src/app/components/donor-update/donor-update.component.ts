import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-donor-update',
  templateUrl: './donor-update.component.html',
  styleUrls: ['./donor-update.component.css']
})
export class DonorUpdateComponent implements OnInit {

  currentdonors = null;
  message = '';
  constructor(private donorService: DonationsService,private route: ActivatedRoute,
    private router: Router) {

     }

  ngOnInit(): void {
    this.message = '';
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
  updateDonor(): void {
    this.donorService.update(this.currentdonors.id,this.currentdonors)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Donor details was updated!';
          this.router.navigate(['landing/donors']);
        },
        error => {
          console.log(error);
        });
  }
}
