import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs";
import "rxjs/add/observable/throw";

@Injectable({
  providedIn: "root"
})
export class LoginServiceService {
  url = "http://localhost:3000";

  private loginStatus = JSON.parse(localStorage.getItem("loggedIn") || "false");

  constructor(private http: HttpClient) {}

  usrLogin(user) {
    return this.http.post(`${this.url}/loginUser`, user).catch(this.errHandle);
  }
  errHandle(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Please check your input");
  }
  loggedIn(value: boolean) {
    this.loginStatus = value;
    localStorage.setItem("loggedIn", this.loginStatus.toString());
  }
  get isLoggedIn() {
    return JSON.parse(
      localStorage.getItem("loggedIn") || this.loggedIn.toString()
    );
  }
  status() {
    return this.loginStatus;
  }
}
