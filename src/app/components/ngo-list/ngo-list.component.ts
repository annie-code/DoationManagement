import { Component, OnInit } from '@angular/core';
import { NgoService } from 'src/app/services/ngo.service'; 
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ngo-list',
  templateUrl: './ngo-list.component.html',
  styleUrls: ['./ngo-list.component.css']
})
export class NgoListComponent implements OnInit {
  ngos: any;
  currentNgo = null;
  currentIndex = -1;
  ngoid = 0;
  constructor(private ngoService: NgoService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrievengos();
  }
  retrievengos() {
    this.ngoService.getAll()
      .subscribe(
        data => {
          this.ngos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList() {
    this.retrievengos();
    this.currentNgo = null;
    this.currentIndex = -1;
  }

  setActiveNgo(ngo, index) {
    this.currentNgo = ngo;
    this.currentIndex = index;
  }
  deleteNgo(id): void {
    console.log(id)
    this.ngoService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.retrievengos();
        },
        error => {
          console.log(error);
        });
        
  }

}
