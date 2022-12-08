import { Component, OnInit } from '@angular/core';
import { NgoService } from 'src/app/services/ngo.service';
@Component({
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css']
})
export class NgoRegisterComponent implements OnInit {
  ngo = {
    id: 0,
    name: '',
    username: '',
    password: '',
    address: '',
    phone: '',
    startdate: '',
    filepath: '',
    isdeleted: true
   
  };
  submitted = false;
  constructor(private ngoService: NgoService) { }

  ngOnInit(): void {
  }
  saveNgo() {
    const data = {
      id: this.ngo.id,
      name: this.ngo.name,
      username: this.ngo.username,
      password: this.ngo.password,
 
    address: this.ngo.address,
    phone: this.ngo.phone,
    startdate: this.ngo.startdate,
    filepath: this.ngo.filepath,
    isdeleted: true,
    
    };

    this.ngoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newNgo() {
    this.submitted = false;
    this.ngo = {
      id: 0,
      name: '',
      username: '',
      password: '',
      address: '',
      phone: '',
      startdate: '',
      filepath: '',
      isdeleted: true
    };
  }
}
