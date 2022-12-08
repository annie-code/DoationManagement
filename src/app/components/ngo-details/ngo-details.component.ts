import { Component, OnInit } from '@angular/core';
import { NgoService } from 'src/app/services/ngo.service'; 
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ngo-details',
  templateUrl: './ngo-details.component.html',
  styleUrls: ['./ngo-details.component.css']
})
export class NgoDetailsComponent implements OnInit {
  currentngos: any;
  constructor(private ngoService: NgoService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
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

}
