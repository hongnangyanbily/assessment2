import { Component, OnInit } from "@angular/core";
import { LoginServiceService } from "../services/login-service.service";
import { Router, Route } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  ngOnInit(): void {}
  user: User;
  loginStatus: boolean;
  constructor(private http: LoginServiceService, private route: Router) {
    //build raw data
    this.user = {
      id: 101,
      firstName: "Alex",
      lastName: "Wu",
      age: 21,
      gender: "Male",
      groupJoint: "None",
      personalInterest: "Java"
    };
    if (http.isLoggedIn) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }
  logout() {
    this.http.loggedIn(false);
    this.route.navigate(["/"]);
    document.getElementById("out").style.visibility = "hidden";
  }
}
interface User {
  //define a new schema
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  groupJoint: string;
  personalInterest: string;
}
