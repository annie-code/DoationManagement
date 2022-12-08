import { Component, OnInit } from '@angular/core';
import { NgoService } from 'src/app/services/ngo.service'; 
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ngo-update',
  templateUrl: './ngo-update.component.html',
  styleUrls: ['./ngo-update.component.css']
})
export class NgoUpdateComponent implements OnInit {
  currentngos = null;
  message = '';
  constructor(private ngoService: NgoService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.searchNgoID(this.route.snapshot.paramMap.get('id'));
 
  }
  searchNgoID(id) {
    this.ngoService. get(id)
      .subscribe(
        data => {
          this.currentngos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updateDonor(): void {
    this.ngoService.update(this.currentngos.id,this.currentngos)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The NGO details was updated!';
          this.router.navigate(['landing/ngos']);
        },
        error => {
          console.log(error);
        });
  }

}
