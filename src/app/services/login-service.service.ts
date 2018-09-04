import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  usrLogin(user) {
    return this.http.post(`${this.url}/loginUser`, user).subscribe(data => {
      console.log(data);
    });
  }
}
