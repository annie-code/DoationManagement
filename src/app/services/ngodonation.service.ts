import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:6565/donations';
@Injectable({
  providedIn: 'root'
})
export class NgodonationService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data) {
    return this.http.post(baseUrl, data);
  }
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  findByDonor(donor) {
    return this.http.get(`${baseUrl}?donorid=${donor}`);
  }
  findByNgo(ngo) {
   
    return this.http.get(`${baseUrl}?ngoid=${ngo}`);
  }
}
