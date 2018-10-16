import { Component, OnInit } from "@angular/core";
import { LoginServiceService } from "../services/login-service.service";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: user;
  currentUsr: user;
  erroMsg;
  loginStatus: boolean;
  constructor(private login: LoginServiceService, private route: Router) {
    this.user = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      gender: "",
      age: "",
      group: ""
    };
    this.currentUsr = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      gender: "",
      age: "",
      group: ""
    };
    if (login.isLoggedIn) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  }
  ngOnInit() {}

  log(event) {
    event.preventDefault();
    const target = event.target;
    this.user.username = target.querySelector("#username").value;
    this.user.password = target.querySelector("#password").value;
    this.login.usrLogin(this.user).subscribe(
      data => {
        if (data != null) {
          console.log("successfully!");
          this.currentUsr = data;
          sessionStorage.setItem("firstname", this.currentUsr.firstname);
          sessionStorage.setItem("lastname", this.currentUsr.lastname);
          sessionStorage.setItem("gender", this.currentUsr.gender);
          sessionStorage.setItem("age", this.currentUsr.age);
          sessionStorage.setItem("group", this.currentUsr.group);
          this.route.navigate(["user"]);
        } else {
          window.alert(
            "User doe not exsit! Please click 'Register' to create accout"
          );
        }
      },
      error => {
        this.erroMsg = error;
        console.log(error);
        window.alert("Please input correct username or password!!");
      }
    );
    this.login.loggedIn(true);
  }
  register() {
    this.route.navigate(["register"]);
  }
}
interface user {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  gender: string;
  age: string;
  group: string;
}
