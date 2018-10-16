import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Http } from "@angular/http";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class LoginServiceService {
  url = "http://localhost:3000";

  private loginStatus = JSON.parse(localStorage.getItem("loggedIn") || "false");

  constructor(private http: Http) {}

  // Send post request to log in
  usrLogin(user) {
    return this.http
      .post(`${this.url}/loginUser`, user)
      .map(res => res.json())
      .catch(this.errHandle);
  }

  // Set error message for invalid input
  errHandle(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Please check your input");
  }

  // Set log in status
  loggedIn(value: boolean) {
    this.loginStatus = value;
    localStorage.setItem("loggedIn", this.loginStatus.toString());
  }

  get isLoggedIn() {
    return this.loginStatus;
  }

  status() {
    return this.loginStatus;
  }

  // Add new user information to backend db
  register(user) {
    return this.http
      .post(`${this.url}/addUser`, user)
      .map(res => res.json())
      .catch(this.errHandle);
  }
}
